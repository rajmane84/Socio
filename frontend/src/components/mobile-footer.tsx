import { Heart, Home as HomeIcon, Search, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type footerItem = {
  title: string,
  icon: React.ReactNode,
  href: string,
}

export function MobileFooter(n) {
  const [isSelected, setIsSelected] = useState("Home");

  const footer: footerItem[] = [
    {
      title: "Home",
      icon: <HomeIcon />,
      href: "/",
    },
    {
      title: "Search",
      icon: <Search />,
      href: "/search",
    },
    {
      title: "Like",
      icon: <Heart />,
      href: "/likes",
    },
    {
      title: "Profile",
      icon: <User />,
      href: "/profile",
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-10 flex h-14 w-full items-center justify-around bg-white md:hidden">
      {footer.map((item) => (
        <Link
          to={item.href}
          key={item.title}
          onClick={() => setIsSelected(item.title)}
          className={`flex size-10 items-center justify-center ${
            isSelected === item.title
              ? "bg-secondary rounded-sm border-2 border-black text-white"
              : "text-black"
          }`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
