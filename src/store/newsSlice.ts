/* This code snippet is setting up a Redux slice for managing news-related state in a TypeScript
application. Here's a breakdown of what the code is doing: */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Article, NewsFilters } from '../types/news.ts';
import { fetchGuardian, fetchNewsApi, fetchNYT } from '../services/api.ts';

interface NewsState {
  articles: Article[];
  filters: NewsFilters;
  isLoading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  articles: [],
  filters: {
    search: '',
    sources: ['Newsapi', 'Guardian', 'Nytimes'],
    category: 'All',
    dateFrom: undefined,
    dateTo: undefined,
  },
  isLoading: false,
  error: null,
};

export const fetchArticles = createAsyncThunk(
  'news/fetchArticles',
  async (filters: NewsFilters) => {
    ('action')
    const apiCalls = [];
    if (filters.sources.includes('Guardian')) {
      apiCalls.push(fetchGuardian(filters));
    }
    if (filters.sources.includes('Nytimes')) {
      apiCalls.push(fetchNYT(filters));
    }
    if (filters.sources.includes('Newsapi')) {
      apiCalls.push(fetchNewsApi(filters));
    }
    const results = await Promise.all(apiCalls);
    return results.flat();
  }
);


export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<NewsFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  /* The `extraReducers` field in the Redux slice configuration is used to define how the state should
  be updated in response to specific actions that are not defined as part of the slice's `reducers`.
  In this case, it is handling the pending, fulfilled, and rejected states of the `fetchArticles`
  async thunk action. */
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch articles';
      });
  },
});

export const { setFilters } = newsSlice.actions;

export default newsSlice.reducer;