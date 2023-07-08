import { configureStore } from '@reduxjs/toolkit';

import { reducer as sortingReducer } from './sort/sort.slice';

export const store = configureStore({
  reducer: {
    sort: sortingReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
