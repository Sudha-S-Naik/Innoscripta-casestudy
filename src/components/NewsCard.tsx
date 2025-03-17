/* This code snippet is defining a React functional component called `NewsCard`. The component takes in
a prop `article` of type `Article` and renders a card displaying news information. Here's a
breakdown of what the code is doing: */
import React from "react";
import { ExternalLink, Clock, User, ImageOff } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Article } from "../types/news";

interface NewsCardProps {
  article: Article;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300"
    > 
    {/* article source and category */}
    <div className=" flex justify-between z-90 relative space-x-2">
          <span className="bg-gray-800 pt-2 h-8 text-gray-300 text-xs font-medium  px-3 py-1">
            {article.source
              ? article.source.charAt(0).toUpperCase() + article.source.slice(1).toLowerCase()
              : "Unknown"}
          </span>
          <p className="px-3 h-8 pt-2 ml-auto py-1 bg-blue-800 text-xs text-blue-200  font-medium ">
            {article.category ?? "General"}
          </p>
        </div>
      <div className="relative">
        {article.imageUrl ? (
       <motion.img
       src={article.imageUrl}
       alt={article.title}
       className="w-full h-48 sm:h-56 md:h-64 object-cover "
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       whileHover={{ scale: 1.02 }}
       transition={{ type: "spring",duration: 0.8 , stiffness: 300 }} // Natural bounce effect
     />
        ) : (
          <div className="w-full flex h-48 sm:h-56 md:h-64 items-center justify-center bg-gray-800">
            <ImageOff className="text-gray-400 w-12 h-12" />
          </div>
        )}
        
      </div>
      <div className="p-4 sm:p-6 flex flex-col h-full">
        <motion.h3
          className="text-lg font-semibold text-white mb-2 line-clamp-2 hover:text-blue-400 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
        >
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </motion.h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {article.description ?? "No description available."}
        </p>
        <div className="flex sm:justify-between  sm:flex-row flex-col items-center text-sm text-gray-400">
          <div className="flex items-center w-full sm:mb-0 mb-3 sm:w-[50%] break-words space-x-2">
            <User className="h-4 w-4" />
            <span>{article.author || "Anonymous"}</span>
          </div>
          <div className="flex items-center w-full sm:mb-0 mb-3  sm:w-[60%] break-words space-x-2">
            <Clock className="h-4 w-4" />
            <span>{article.publishedAt ? format(new Date(article.publishedAt), "PPP") : "Unknown"}</span>
          </div>
        </div>
        <motion.a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 sm:mt-2 flex items-center space-x-1 hover:underline"
        whileHover={{ scale: 1.05 }} // Enlarge text when clicked
      >
      <span>Read more</span>
      <ExternalLink className="h-4 w-4" />
    </motion.a>
  </div>
  </ motion.article>
  );
 };
