import React from 'react';
import { IProfileProps } from './interfaces/IProfileProps';
import ProfileImage from "../../images/profile.png";
import { useSelector } from 'react-redux'
import Image from 'next/image';
import { RootState } from '@reduxjs/toolkit';

const Profile: React.FC<IProfileProps> = ({ className }) => {
  // Get state from redux store
  const { chats } = useSelector((state: RootState) => state.chats);

  //Customizable className
  const classes = `flex justify-between items-center px-4 ${className}`;

  // Render component
  return (<div className={classes}>
    <Image src={ProfileImage} alt="Profile" width={35} height={35} />
    <div>{`${chats.length} Chat${chats.length > 1 && 's'}`}</div>
  </div>);
}
export default Profile;