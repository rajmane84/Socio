import clsx from "clsx";
import { Heart, Home as HomeIcon, Search, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type footerItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

export function MobileFooter() {
  const location = useLocation();

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
      href: "/notifications",
    },
    {
      title: "Profile",
      icon: <User />,
      href: "/profile",
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex h-14 w-full items-center justify-around bg-white md:hidden">
      {footer.map((item) => (
        <Link
          to={item.href}
          key={item.title}
          className={clsx(
            "flex size-10 items-center justify-center",
            location.pathname === item.href
              ? "bg-secondary rounded-sm border-2 border-black text-white"
              : "text-black",
          )}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
