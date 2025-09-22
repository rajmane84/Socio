import { Camera, MapPin, Images, Smile } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { Avatar } from "./avatar";
import clsx from "clsx";

export function CreatePost() {

    const items = [
      {
        title: "Camera",
        icon: <Camera className="hover:text-primary text-neutral-400" />,
      },
      {
        title: "Images",
        icon: <Images className="hover:text-primary text-neutral-400" />,
      },
      {
        title: "Location",
        icon: <MapPin className="hover:text-primary text-neutral-400" />,
      },
      {
        title: "Emojis",
        icon: <Smile className="hover:text-primary text-neutral-400" />,
      },
    ];

    const [input, setInput] = useState<string>("");

  return (
    <div className="shadow-neo z-5 flex h-fit w-full max-w-lg flex-col rounded-md border-2">
      <div className="flex items-start gap-3 rounded-md bg-white p-4">
        {/* User Avatar */}
        <Avatar href="/avatar.webp" size="12" />
        {/* Textarea */}
        <textarea
          placeholder="What's on your mind?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 resize-none rounded-md bg-transparent p-2 text-sm outline-none placeholder:text-neutral-400 focus:ring-0"
          rows={3}
        />
      </div>
      <div className="flex items-center justify-between border-t-2 p-4">
        <div className="flex items-center gap-2 md:gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className={clsx(
                "flex size-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm",
              )}
            >
              {item.icon}
            </div>
          ))}
        </div>
        <Button variant="primary" className="cursor-pointer">
          Share
        </Button>
      </div>
    </div>
  );
}
