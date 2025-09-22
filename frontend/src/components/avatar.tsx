type AvatarProps = {
  size?: string;
  href: string;
};

export function Avatar({ size = "15", href = "/avatar.webp" }: AvatarProps) {
  return (
    <div
      className={`border-primary size-${size} overflow-hidden rounded-full border-2`}
    >
      <img src={href} className="size-full object-cover" />
    </div>
  );
}
