import { Bookmark, Home, Mail, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./button";

type SidebarItem = {
  icon: React.ReactNode;
  title: string;
  href: string;
};

const sidebarItems: SidebarItem[] = [
  {
    title: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    title: "Search",
    icon: <Search />,
    href: "/search",
  },
  {
    title: "Message",
    icon: <Mail />,
    href: "/messages",
  },
  {
    title: "Bookmarks",
    icon: <Bookmark />,
    href: "/bookmarks",
  },
  {
    title: "Profile",
    icon: <User />,
    href: "/profile",
  },
];

export function SideBar() {
  return (
    <div className="sticky top-0 hidden h-screen flex-col gap-2 border-r-2 border-black px-4 py-2 md:flex">
      <img src="/Socio-logo.png" alt="socio-logo" className="mb-2 size-12" />
      {sidebarItems.map((item, index) => (
        <SideBarComponent icon={item.icon} title={item.title} href={item.href} key={index} />
      ))}
      <Button variant="primary" className="py-2 mt-2">Post</Button>
    </div>
  );
}

function SideBarComponent({ icon, title, href }: SidebarItem) {
  return (
    <Link
      to={href}
      className="hover:bg-secondary/75 flex cursor-pointer items-center gap-3 rounded-lg border-2 border-transparent px-2 py-1 hover:border-black"
    >
      {icon}
      <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
    </Link>
  );
}

export default SideBarComponent;
