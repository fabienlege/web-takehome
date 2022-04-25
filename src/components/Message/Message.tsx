import React from 'react';
import { IMessageProps } from './interfaces/IMessageProps';

const Message: React.FC<IMessageProps> = ({ message }) => {
  const classes = `${message.writtenByMe ? 'my-messages' : 'highlighted'} mb-2 py-2 px-3 w-auto rounded-full ${message.writtenByMe && 'self-end'}`;

  return (<div className={classes}>
    {message.content}
  </div>);
}
export default Message;