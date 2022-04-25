import ChatInterface from "types/chats";

export interface IChatItemProps {
  /**
   * Chat item to display
   */
  chat: ChatInterface;

  /**
   * display last message date
   * @default false
   */
  showLastMessageDate?: boolean;

  /**
   * display last message text
   * @default false
   */
  showLastMessageText?: boolean;

  /**
   * should the chat must be highlighted if it's selected
   * @default false
   */
  shouldHighlight?: boolean;
}