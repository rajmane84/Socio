import clsx from "clsx";
import { Check, Plus } from "lucide-react";
import { useState } from "react";

export function Suggestions() {
  return (
    <div className="sticky top-0 hidden h-screen flex-col gap-4 border-l-2 border-black pl-4 px-2 lg:flex">
      <h1 className="mt-3 text-xl font-semibold tracking-tight">Suggestions</h1>
      <div className="flex flex-col gap-3">
        <SuggestionComponent />
        <SuggestionComponent />
        <SuggestionComponent />
      </div>
    </div>
  );
}

function SuggestionComponent() {
  const [sendRequest, setSendRequest] = useState<boolean>(false);
  return (
    <div className="flex h-15 w-full items-center justify-between border-b-2">
      <div className="flex items-center gap-2">
        <div className="border-primary size-10 overflow-hidden rounded-full border-2">
          <img src="/avatar.webp" className="size-full object-cover" />
        </div>
        <p className="text-sm">Raj Mane</p>
      </div>
      <div
        onClick={() => setSendRequest(true)}
        className={clsx(
          "flex size-8 cursor-pointer items-center justify-center rounded-full text-white",
          !sendRequest ? "bg-secondary" : "bg-green-500",
        )}
      >
        {!sendRequest ? <Plus /> : <Check />}
      </div>
    </div>
  );
}
