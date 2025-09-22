import { Link } from "react-router-dom";
import { Avatar } from "../../components/avatar";
import { Search as SearchIcon } from "lucide-react";
import { motion } from "motion/react";

function Messages() {
  return (
    <div className="relative flex h-screen flex-col p-4">
      {/* Search Input */}
      <div className="relative mb-4">
        <input
          type="text"
          className="w-full rounded-xl border-2 border-black py-3 pr-4 pl-12 text-sm focus:outline-none"
          placeholder="Search messages..."
        />
        <SearchIcon className="absolute top-1/2 left-3 size-5 -translate-y-1/2 text-neutral-500" />
      </div>

      {/* Scrollable Messages List */}
      <div className="flex-1 space-y-2 overflow-y-auto">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <MessageComponent key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Messages;

function MessageComponent({ index }: {index: number}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link
        to="/chat/1"
        className="flex cursor-pointer items-center gap-3 rounded-md border-b-2 p-3 transition hover:scale-[1.01] hover:bg-secondary/75"
      >
        <Avatar href="/avatar.webp" size="12" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-black">rajmane84</span>
          <span className="text-xs text-neutral-400">1 hour ago</span>
        </div>
      </Link>
    </motion.div>
  );
}
