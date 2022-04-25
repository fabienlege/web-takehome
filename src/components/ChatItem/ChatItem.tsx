import React from 'react';
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux';
import UserInterface from 'types/users';
import MessageInterface from 'types/messages';
import moment from 'moment';
import { setCurrentChat } from 'redux/services/chats/ChatsSlice';
import { IChatItemProps } from './iterfaces/IChatItemProps';

const ChatItem: React.FC<IChatItemProps> = ({ chat, showLastMessageDate = false, showLastMessageText = false, shouldHighlight = false }) => {
  // Retrive user of this chat from redux store
  const user: UserInterface = useSelector((state: RootState) => state.users.users.filter(user => user.id === chat.withUser)[0]);

  // Retrive last message of this chat from redux store
  const lastMessage: MessageInterface = useSelector((state: RootState) => state.messages.messages.filter(message => message.id === chat.lastMessage)[0]);

  // retrive currently selected chat from redux store
  const { currentChat, searchQuery } = useSelector((state: RootState) => state.chats);

  // initialize dispatch
  const dispatch = useDispatch();

  /**
   * apply searchQuery to chat item
   */
  if (searchQuery && !user.name.toLowerCase().includes(searchQuery.toLowerCase())) {
    return null; // return null if searchQuery is not found in user name
  }

  /**
   * Handle click on chat item
   */
  const handleClick = () => {
    // Update chat status to read
    dispatch(setCurrentChat(chat.id));
  }

  // Customizable className
  const classes = `flex p-2 cursor-pointer rounded-lg items-center ${chat.id === currentChat && shouldHighlight && 'highlighted'}`;

  return (<div className={classes} onClick={handleClick}>
    <div className='relative'>
      <Image src={user.profilePicture} alt={user.name} width={50} height={50} />
      {chat.isActive && <div className='absolute bottom-1 right-1 bg-green-500 p-1 rounded-full border border-white'><span className='text-white'></span></div>}
    </div>
    <div className='mx-4 w-1/2'>
      <div className='font-bold'>{user.name}</div>
      {showLastMessageText && <div className='text-xs truncate'>{lastMessage.content}</div>}
    </div>
    {showLastMessageDate && <div className='text-xs text-right self-end grow'>{moment(lastMessage.date).fromNow(true)}</div>}
  </div>);

}
export default ChatItem;