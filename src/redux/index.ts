import { configureStore } from '@reduxjs/toolkit'
import { ChatsSlice } from './services/chats/ChatsSlice'
import { IChatsState } from './services/chats/interfaces/IChatsState'
import { IMessagesState } from './services/messages/interfaces/IMessagesState'
import { MessagesSlice } from './services/messages/MessagesSlice'
import { IUsersState } from './services/users/interfaces/IUsersState'
import { UsersSlice } from './services/users/UsersSlice'

export const store = configureStore({
  reducer: {
    [MessagesSlice.name]: MessagesSlice.reducer,
    [ChatsSlice.name]: ChatsSlice.reducer,
    [UsersSlice.name]: UsersSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export interface RootState {
  messages: IMessagesState
  chats: IChatsState
  users: IUsersState
}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch