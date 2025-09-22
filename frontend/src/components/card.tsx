import { Heart, Bookmark, MessageCircle, Send } from "lucide-react";
import { DotsVertical } from "./icons";
import { useState } from "react";
import clsx from "clsx";

export function Card() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  return (
    <div className="shadow-neo relative z-1 flex h-fit w-full max-w-lg flex-col gap-5 rounded-md border-2 border-black bg-white p-6">
      <DotsVertical
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-4 right-3 cursor-pointer"
      />

      {isMenuOpen && <DropdownMenu />}

      <div className="flex items-center gap-3">
        <div
          className={`border-primary size-11 overflow-hidden rounded-full border-2`}
        >
          <img src="/avatar.webp" className="size-full object-cover" />
        </div>
        <div>
          <h2 className="text-md font-semibold tracking-tight text-black">
            rajmane84
          </h2>
          <p className="text-xs text-neutral-400">Raj Mane</p>
        </div>
      </div>
      <div className="flex size-full flex-col gap-2">
        <p className="text-sm text-neutral-400">Photography time!!!</p>
        <div className="h-50 w-full border-1">
          <img
            src="/scenary.webp"
            alt="image"
            className="size-full object-cover"
          />
        </div>
        <div className="flex h-10 items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart
              onClick={() => setIsLiked(!isLiked)}
              className={clsx(
                "size-7 cursor-pointer stroke-black",
                isLiked ? "fill-red-500" : "fill-none",
              )}
            />
            <MessageCircle className="size-6 cursor-pointer" />
            <Send className="size-6 cursor-pointer" />
          </div>
          <Bookmark
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={clsx(
              "size-7 cursor-pointer stroke-black",
              isBookmarked ? "fill-yellow-400" : "fill-none",
            )}
          />
        </div>
      </div>
    </div>
  );
}

// take a ref and when user clicks outside the menu, close the menu
// you can use useRef and useEffect for that
// but for now, just a simple dropdown menu
function DropdownMenu() {
  return (
    <div className="absolute top-10 right-3 z-10 flex w-40 flex-col overflow-hidden rounded-md border-2 border-black bg-white shadow-md">
      {/* Optionally render the edit post button only if the user is the owner of the post */}
      <button className="hover:bg-secondary/75 cursor-pointer px-4 py-2 text-left text-sm">
        Edit Post
      </button>
      {/* Optionally render the delete post button only if the user is the owner of the post */}
      <button className="hover:bg-secondary/75 cursor-pointer px-4 py-2 text-left text-sm">
        Delete Post
      </button>
      <button className="hover:bg-secondary/75 cursor-pointer px-4 py-2 text-left text-sm">
        Report
      </button>
    </div>
  );
}
