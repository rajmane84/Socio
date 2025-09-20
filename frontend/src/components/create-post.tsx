import { Camera, MapPin, Images, Smile } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";

export function CreatePost() {

    const items = [
      {
        title: "Camera",
        icon: <Camera className="text-neutral-400" />,
      },
      {
        title: "Images",
        icon: <Images className="text-neutral-400" />,
      },
      {
        title: "Location",
        icon: <MapPin className="text-neutral-400" />,
      },
      {
        title: "Emojis",
        icon: <Smile className="text-neutral-400" />,
      },
    ];

    const [input, setInput] = useState<string>("");

  return (
    <div className="shadow-neo z-5 flex w-full h-fit max-w-lg flex-col rounded-md border-2">
      <div className="flex items-start gap-3 p-4 bg-white rounded-md">
        {/* User Avatar */}
        <div className="border-primary size-12 overflow-hidden rounded-full border-2">
          <img
            src="/avatar.webp"
            alt="User avatar"
            className="size-full object-cover"
          />
        </div>
        {/* Textarea */}
        <textarea
          placeholder="What's on your mind?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 resize-none rounded-md bg-transparent p-2 text-sm outline-none focus:ring-0 placeholder:text-neutral-400"
          rows={3}
        />
      </div>
      <div className="flex items-center justify-between border-t-2 p-4">
        <div className="flex items-center gap-2 md:gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm cursor-pointer"
            >
              {item.icon}
            </div>
          ))}
        </div>
        <Button variant="primary" className="cursor-pointer">Share</Button>
      </div>
    </div>
  );
}
