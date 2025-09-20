
// make it dynamic and take size from prop
export function avatar() {
  return (
    <div className="border-primary size-15 overflow-hidden rounded-full border-2">
      <img src="/avatar.webp" className="size-full object-cover" />
    </div>
  );
}
