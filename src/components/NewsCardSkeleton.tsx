/**
 * The above code defines React components for displaying a skeleton loading animation for news cards.
 */
import React from "react";
import { motion } from "framer-motion";

export const NewsCardSkeleton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden flex flex-col h-full animate-pulse"
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 dark:bg-gray-700" />
        <div className="absolute top-2 left-2 flex gap-2">
          <div className="w-20 h-6 bg-gray-300 dark:bg-gray-600 rounded-full" />
          <div className="w-24 h-6 bg-gray-300 dark:bg-gray-600 rounded-full" />
        </div>
      </ motion.div>
      <div className="p-4 sm:p-6 flex flex-col h-full">
        <motion.div
          className="h-6 bg-gray-200 dark:bg-gray-600 rounded mb-2"
          initial={{ opacity: 0, width: "50%" }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="h-6 bg-gray-200 dark:bg-gray-600 rounded mb-4"
          initial={{ opacity: 0, width: "40%" }}
          animate={{ opacity: 1, width: "50%" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.div
          className="space-y-3 flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-4/5" />
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4" />
        </motion.div>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-500 dark:text-gray-400 space-y-2 sm:space-y-0 sm:space-x-4">
          <motion.div
            className="w-24 h-4 bg-gray-200 dark:bg-gray-600 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="w-32 h-4 bg-gray-200 dark:bg-gray-600 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export const NewsCardSkeletonList: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {[...Array(6)].map((_, i) => (
        <NewsCardSkeleton key={i} />
      ))}
    </motion.div>
  );
};
