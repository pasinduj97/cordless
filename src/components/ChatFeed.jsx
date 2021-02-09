import React from 'react';
import TheirMessage from './TheirMessage';
import MyMessage from './MyMessage';
import MessageForm from './MesageForm';

const ChatFeed = props => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  console.log(chat, userName, messages);

  const renderMessages = () => {
    const keys = Object.keys(messages);

    console.log(keys);
  };

  renderMessages();

  return <div></div>;
};

export default ChatFeed;
