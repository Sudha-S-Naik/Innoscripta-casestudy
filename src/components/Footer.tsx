/**
 * The `Footer` component in TypeScript React uses Framer Motion for animations and displays a footer
 * with copyright information for a news aggregator website.
 * @returns The `Footer` component is being returned. It is a functional component in React that
 * renders a footer element with some motion effects using Framer Motion library. The footer contains a
 * paragraph with copyright information for a news aggregator website.
 */
import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-14 flex flex-col sm:flex-row items-center justify-center border-t border-neutral-700 text-gray-400 bg-gray-900 px-4"
    >
      <p className="text-sm sm:text-base text-center">
        © {new Date().getFullYear()} <span className="font-semibold">News Aggregator</span>. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
