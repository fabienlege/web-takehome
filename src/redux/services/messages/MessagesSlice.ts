import { createSlice } from "@reduxjs/toolkit";
import generateMessages from "data/messages";
import { IMessagesState } from "./interfaces/IMessagesState";

const initialState: IMessagesState = {
  messages: generateMessages()
}

export const MessagesSlice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {

  }
})

export default MessagesSlice.reducer;