import { Bell, Bookmark, Home, Mail, Search, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./button";
import clsx from "clsx";

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
    title: "Notifications",
    icon: <Bell />,
    href: "/notifications",
  },
  {
    title: "Profile",
    icon: <User />,
    href: "/profile",
  },
];

export function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 hidden h-screen flex-col gap-2 border-r-2 border-black px-4 py-2 md:flex">
      <Link to="/">
        <img src="/Socio-logo.png" alt="socio-logo" className="mb-2 size-12" />
      </Link>
      {sidebarItems.map((item, index) => (
        <SideBarComponent
          icon={item.icon}
          title={item.title}
          href={item.href}
          key={index}
        />
      ))}
      <Button
        onClick={() => navigate("/create-post")}
        variant="primary"
        className="mt-2 cursor-pointer py-2"
      >
        Create New Post
      </Button>
    </div>
  );
}

function SideBarComponent({ icon, title, href }: SidebarItem) {
  const location = useLocation();

  return (
    <Link
      to={href}
      className={clsx(
        "hover:bg-secondary/75 flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1 hover:border-black",
        location.pathname === href
          ? "bg-secondary/75 border-2 border-black"
          : "border-2 border-transparent",
      )}
    >
      {icon}
      <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
    </Link>
  );
}

export default SideBarComponent;
