import ChatInterface from "types/chats";

export interface IChatsState {
  /**
   * List of available chats
   */
  chats: ChatInterface[];

  /**
   * chat search query
   * @default ""
   */
  searchQuery: string;

  /**
   * Currently selected chat id
   * @default null
   */
  currentChat: string | null;
}