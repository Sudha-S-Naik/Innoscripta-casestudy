/**
 * The `Header` component in this TypeScript React code creates a sticky header with a logo and title
 * that have motion effects using Framer Motion.
 * @returns The `Header` component is being returned. It is a functional component that renders a
 * header section with a logo (Newspaper icon) and a title ("News Aggregator"). The header has motion
 * effects applied to it using Framer Motion library for animations.
 */
import React from "react";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700 shadow-sm"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="flex items-center space-x-2 cursor-pointer"
        >
          <Newspaper className="h-8 w-8 text-blue-400" />
          <h1 className="text-2xl font-bold text-white">
            News Aggregator
          </h1>
        </motion.div>
      </div>
    </motion.header>
  );
};
