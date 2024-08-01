import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme/themeSlice";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    theme,
    categories,
    products,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
