import ChatItem from 'components/ChatItem/ChatItem';
import Message from 'components/Message/Message';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux';

const Room: React.FC = () => {
  // retrive current chat from redux store
  const currentChat = useSelector((state: RootState) => state.chats.chats.filter(chat => chat.id === state.chats.currentChat)[0] || null);

  // retrive messages for the currently selected chat from redux store
  const messages = useSelector((state: RootState) => state.messages.messages.filter(message => message.chatId === currentChat.id));

  // If no current chat is selected, return a simple message
  if (!currentChat) {
    return (<div className="flex flex-col h-full justify-center">
      <div className="text-center text-xl font-bold text-gray-400">Please select a person to display messages</div>
    </div>);
  }

  return (<div className='flex flex-col h-full'>
    <div><ChatItem chat={currentChat} /></div>
    <div className='flex flex-col justify-end items-start grow'>{messages.map((message, index) => <Message key={index} message={message} />)}</div>
    <div></div>
  </div>);
}
export default Room;