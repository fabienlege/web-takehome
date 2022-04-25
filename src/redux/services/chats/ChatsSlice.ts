import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generateChats from "data/chats";
import { IChatsState } from "./interfaces/IChatsState";

const initialState: IChatsState = {
  chats: generateChats().chats,
  searchQuery: '',
  currentChat: null,
}

export const ChatsSlice = createSlice({
  name: "chats",
  initialState: initialState,
  reducers: {
    setCurrentChat: (state, action: PayloadAction<string>) => {
      state.currentChat = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    }
  }
})

export const { setCurrentChat, setSearchQuery } = ChatsSlice.actions;

export default ChatsSlice.reducer;