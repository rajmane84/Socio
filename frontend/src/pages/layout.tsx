import { Outlet } from "react-router-dom";
import { Suggestions } from "../components/suggestions";
import { MobileFooter, SideBar } from "../components";
import Navbar from "../components/navbar";

export default function Layout() {
  return (
    <div className="bg-background relative min-h-screen w-full p-2 md:px-4 md:pt-4">
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

      {/* Layout wrapper with proper grid structure */}
      <div className="relative z-10 flex min-h-screen flex-col gap-4 md:mx-auto md:grid md:max-w-4xl md:grid-cols-[1fr_2fr] lg:max-w-5xl lg:grid-cols-[1fr_2fr_1fr] lg:gap-6">
        <SideBar />

        {/* Main Content Area */}
        <main className="flex flex-1 flex-col gap-4">
          <Outlet />
        </main>

        {/* Suggestions */}
        <Suggestions />
      </div>

      <MobileFooter />
    </div>
  );
}
