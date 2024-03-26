import { configureStore } from "@reduxjs/toolkit";
import SearchToggle from "./reducers/SearchToggle";
import GroupToggle from "./reducers/GroupToggle";

export const store = configureStore({
  reducer: {
    SearchToggle: SearchToggle,
    GroupToggle: GroupToggle,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
