import ChatItem from 'components/ChatItem/ChatItem';
import Logo from 'components/Logo/Logo';
import Profile from 'components/Profile/Profile';
import Search from 'components/Search/Search';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux';

const ChatList: React.FC = ({ }) => {
  //Get state from redux store
  const { chats } = useSelector((state: RootState) => state.chats);

  return (<div className="flex flex-col">
    <Logo className="my-6 mx-2" height='28' />
    <Profile className='mb-4' />
    <Search />
    <div className='my-4 mx-2 flex flex-col'>
      {chats.map((chat, index) => <ChatItem key={index} chat={chat} showLastMessageDate showLastMessageText shouldHighlight />)}
    </div>
  </div>);
}
export default ChatList;