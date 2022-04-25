import generateUsers from 'data/users';
import generateChats from 'data/chats';

import ClubLogoSvg from 'icons/club-logo.svg';
import UserInterface from 'types/users';
import ChatInterface from 'types/chats';
import MessageInterface from 'types/messages';
import ChatList from 'components/ChatList/ChatList';
import Room from 'components/Room/Room';

interface LandingPageProps {
  users: UserInterface[];
  chats: ChatInterface[];
  messages: MessageInterface[];
};

const LandingPage = ({ users, chats, messages }: LandingPageProps) => {
  console.log({ users, chats, messages });

  return (
    <>
      <div className="h-screen w-full flex">
        <div className="w-3/12 h-full">
          <ChatList />
        </div>
        <div className="flex-grow h-full">
          <Room />
        </div>
        <div className="w-3/12 h-full flex justify-center items-center">
          Detail
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = () => {
  // This is only an exemple of how you could pass data from server to client,
  // you may create another page and not use that use
  const users: UserInterface[] = generateUsers();
  const { chats, messages }: { chats: ChatInterface[], messages: MessageInterface[] } = generateChats();

  return {
    props: {
      users, chats, messages,
    },
  };
}

export default LandingPage;
