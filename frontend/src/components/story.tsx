

export function Story() {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5">
      <div className="border-primary size-15 overflow-hidden rounded-full border-2">
        <img src="/avatar.webp" className="size-full object-cover" />
      </div>
      <span className="text-sm">you</span>
    </div>
  );
}
