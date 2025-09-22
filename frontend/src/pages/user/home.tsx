import { MessageCircleIcon } from "lucide-react";
import { Card, CreatePost, Story } from "../../components";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <>
      {/* Navbar - for mobile */}
      <div className="relative flex items-center justify-between border-b-2 border-black py-2 md:hidden">
        <div className="flex items-center gap-2">
          <img src="/Socio-logo.png" alt="logo" className="size-8" />
          <span className="font-heading text-primary text-shadow-[2px_2px_0px_0px_var(--color-black)] text-xl font-semibold tracking-wider">
            SOCIO
          </span>
        </div>
        <Link to="/messages">
          <MessageCircleIcon />
        </Link>
        <div className="absolute top-[11px] right-0 size-2 rounded-full bg-red-500"></div>
      </div>

      {/* Greeting */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Hii, Raj</h1>
        <p className="mb-1 text-sm text-neutral-400">
          Welcome back to Socio!!!
        </p>

        {/* Stories */}
        <div className="scrollbar-hide mt-2 flex items-center gap-3 overflow-x-auto">
          <Story />
          <Story />
          <Story />
        </div>
      </div>

      {/* Create Post */}
      <CreatePost />

      {/* Posts */}
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}
