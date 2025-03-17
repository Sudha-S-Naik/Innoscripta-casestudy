/**
 * The `NewsFilters` component in this TypeScript React code handles filtering news articles based on
 * search keywords, date range, news sources, and categories.
 */
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Filter } from 'lucide-react';
import { fetchArticles, setFilters } from '../store/newsSlice';
import { Category, NewsSource } from '../types/news';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

export const NewsFilters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.news.filters);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [newsSearch, setNewsSearch] = useState(filters.search);

  const sources: NewsSource[] = ['Newsapi', 'Guardian', 'Nytimes'];
  const categories: Category[] = [
    'All',
    'General',
    'Business',
    'Technology',
    'Sports',
    'Entertainment',
    'Science',
    'Health',
  ];

  useEffect(() => {
    dispatch(fetchArticles(filters));
  }, [filters]);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      dispatch(setFilters({ search: newsSearch }));
    }, 500);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [newsSearch, dispatch]);

  const handleSourceToggle = (source: NewsSource) => {
    const newSources = filters.sources.includes(source)
      ? filters.sources.filter((s) => s !== source)
      : [...filters.sources, source];
    dispatch(setFilters({ sources: newSources }));
  };

  const handleCategoryToggle = (category: Category) => {
    dispatch(setFilters({ category }));
  };

  const handleDateChange = (field: 'dateFrom' | 'dateTo', value: string) => {
    dispatch(setFilters({ [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-800 rounded-xl shadow-md p-6 space-y-8 w-full max-w-4xl mx-auto"
    >
      {/* Search */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          <Search className="h-5 w-5 text-blue-500" />
          Search News
        </label>
        <input
          type="text"
          value={newsSearch}
          onChange={(e) => setNewsSearch(e.target.value)}
          placeholder="Search by keyword..."
          className="w-full px-4 py-3 border  border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        />
      </div>

      {/* Date Range */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-500" />
            From Date
          </label>
          <input
            type="date"
            value={filters.dateFrom}
            onChange={(e) => handleDateChange('dateFrom', e.target.value)}
            className="w-full px-4 py-3 border border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-500" />
            To Date
          </label>
          <input
            type="date"
            value={filters.dateTo}
            onChange={(e) => handleDateChange('dateTo', e.target.value)}
            className="w-full px-4 py-3 border border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
          />
        </div>
      </div>

      {/* Sources & Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sources */}
        <div>
          <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
            <Filter className="h-5 w-5 text-blue-500" />
            Sources
          </label>
          <div className="flex flex-wrap gap-2 mt-3">
            {sources.map((source) => (
              <motion.button
                key={source}
                onClick={() => handleSourceToggle(source)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all
                  ${
                    filters.sources.includes(source)
                      ? 'bg-blue-600 text-white'
                      : ' bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
              >
                {source}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
            <Filter className="h-5 w-5 text-blue-500" />
            Categories
          </label>
          <div className="flex flex-wrap gap-2 mt-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryToggle(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all
                  ${
                    filters.category === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
