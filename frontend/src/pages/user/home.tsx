import { Menu, MessageCircleIcon, X } from "lucide-react";
import {
  Card,
  CreatePost,
  MobileFooter,
  SideBar,
  Story,
} from "../../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/navbar";
import { Suggestions } from "../../components/suggestions";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Search", path: "/search" },
    { label: "Messages", path: "/messages" },
    { label: "Bookmarks", path: "/bookmarks" },
    { label: "Profile", path: "/profile" },
  ];

  return (
    <div className="bg-background relative min-h-screen w-full p-2 md:px-4 md:pt-4">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #73B2AC 1px, transparent 1px),
            linear-gradient(to bottom, #73B2AC 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.15,
        }}
      />

      <Navbar />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 z-50 flex h-full w-64 flex-col border-r-2 border-black bg-white p-4 shadow-lg">
          <button
            className="absolute top-2 right-4 mb-6 flex items-center gap-2 text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="size-6 cursor-pointer" />
          </button>
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-primary text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Layout wrapper */}
      <div className="relative z-10 flex min-h-screen flex-col gap-4 md:mx-auto md:grid md:max-w-4xl md:grid-cols-[1fr_2fr] lg:max-w-5xl lg:grid-cols-[1fr_2fr_1fr] lg:gap-6">
        <SideBar />

        {/* Main Content */}
        <main className="flex flex-1 flex-col gap-4">
          {/* Navbar - for mobile */}
          <div className="relative flex items-center justify-between border-b-2 border-black py-2 md:hidden">
            <Menu
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
            <img src="/Socio-logo.png" alt="logo" className="size-8" />
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
        </main>

        {/* Suggestions */}
        <Suggestions />
      </div>
      <MobileFooter />
    </div>
  );
}
