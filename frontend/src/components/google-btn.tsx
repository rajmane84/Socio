import { Button } from "./button";
import { GoogleIcon } from "./icons";

// Future improments
export function GoogleBtn({ type }: { type: string }) {
  return (
    <Button
      variant="ghost"
      type="button"
      className="flex items-center justify-center gap-1 px-4 py-2"
    >
      <GoogleIcon />
      {type} With Google
    </Button>
  );
}
