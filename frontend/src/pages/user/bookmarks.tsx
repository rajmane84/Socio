import { Card } from "../../components";
import { motion } from "motion/react";

function Bookmarks() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header with animation */}
      <motion.header
        className="border-b-2 border-black py-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="font-heading text-center text-2xl font-semibold">
          Bookmarks
        </h1>
      </motion.header>

      {/* Cards list */}
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            }}
            className="rounded-xl"
          >
            <Card />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;