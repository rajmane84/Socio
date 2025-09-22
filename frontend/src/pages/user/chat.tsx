/* eslint-disable react/no-unescaped-entities */
import { motion, type Variants } from "framer-motion";
import { Avatar } from "../../components/avatar";
import { Link } from "lucide-react";

// There are bugs over here. As this is not on priority, we'll fix it later.

function ChatPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const messageVariants: Variants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const shadowNeoSm = "shadow-[4px_4px_0px_0px_#000]";
  const borderNeo = "border-2 border-black";

  return (
    <motion.div
      className="mx-auto flex w-full max-w-xl flex-col overflow-hidden rounded-md"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Chat Header */}
      <div className="bg-secondary flex items-center justify-between border-b-2 border-black px-4 py-2">
        <div className="flex items-center gap-2">
          <Avatar href="/avatar.webp" size="11" />
          <h2 className="text-xl font-semibold">Shravani</h2>
        </div>
        <div className="flex space-x-2">
          <div className={`size-4 rounded-full bg-red-500 ${borderNeo}`} />
          <div className={`size-4 rounded-full bg-yellow-500 ${borderNeo}`} />
          <div className={`size-4 rounded-full bg-green-500 ${borderNeo}`} />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto bg-transparent p-4">
        <motion.div className="flex justify-start" variants={itemVariants}>
          <motion.div
            className={`bg-white p-4 ${borderNeo} ${shadowNeoSm} max-w-xs rounded-lg`}
            variants={messageVariants}
            initial="initial"
            animate="animate"
          >
            <p className="text-sm">
              Hey, this is a message from the other person!
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="flex justify-end" variants={itemVariants}>
          <motion.div
            className={`bg-blue-400 p-4 ${borderNeo} ${shadowNeoSm} max-w-xs rounded-lg`}
            variants={messageVariants}
            initial="initial"
            animate="animate"
          >
            <p className="text-sm">And this is a message I've sent back.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Message Input */}
      <div className="flex items-center border-t-2 border-black px-4 py-2">
        <div className="relative flex-1">
          <motion.input
            type="text"
            className={`w-full p-3 pl-12 ${borderNeo} ${shadowNeoSm} rounded-md bg-white focus:outline-none`}
            placeholder="Type a message..."
          />
          <button className="absolute inset-y-0 left-4 flex cursor-pointer items-center pr-3">
            <Link />
          </button>
        </div>
        <motion.button
          className={`bg-secondary ml-4 p-3 font-bold text-black ${borderNeo} ${shadowNeoSm} rounded-md`}
          whileTap={{ scale: 0.95, x: 2, y: 2, boxShadow: "none" }}
        >
          Send
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ChatPage;