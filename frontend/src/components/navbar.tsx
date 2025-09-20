import { Button } from "./button";
import { GithubIcon } from "./icons";

export default function Navbar() {
  return (
    <div className="shadow-neo bg-primary z-5 mx-auto mb-6 hidden h-15 w-full max-w-5xl items-center justify-between rounded-md border-2 px-4 md:flex">
      <div className="ml-4 flex items-center gap-2">
        <img src="/Socio-logo.png" alt="socio-logo" className="size-8" />
        <span className="font-heading text-xl font-semibold tracking-wider text-white">
          SOCIO
        </span>
      </div>
      <GiveStarBtn />
    </div>
  );
}

function GiveStarBtn() {
  return (
    <Button variant="ghost">
      <a href="https://github.com/rajmane84" className="flex items-center gap-2">
        <span className="font-semibold">Give a Star</span>
        <GithubIcon />
      </a>
    </Button>
  );
}