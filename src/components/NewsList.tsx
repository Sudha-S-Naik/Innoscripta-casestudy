/* This code snippet is a React component called `NewsList` that displays a list of news articles.
Here's a breakdown of what the code is doing: */
import React from "react";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Article } from "../types/news";
import { NewsCardSkeleton } from "./NewsCardSkeleton";
import { NewsCard } from "./NewsCard";

const NewsList: React.FC = () => {
  const { articles, isLoading } = useSelector((state: RootState) => state.news);

  return (
    <div className="md:px-4 md:py-4">
      {isLoading ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <NewsCardSkeleton key={i} />
          ))}
        </motion.div>
      ) : articles.length === 0 ? (
        <motion.div
          className="text-center py-12 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Newspaper className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg font-medium">No articles found</p>
          <p className="text-gray-500">Try adjusting your filters or searching for something else.</p>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-4 py-2"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {articles.map((article: Article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <NewsCard article={article} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NewsList;
