import './MessageCard.scss';
import { useState, useContext } from 'react';

import { Message } from '../interfaces';
import { MessagesContext, UpdateMessagesContext } from '../App';

interface MessageCardProps {
  message: Message;
}

function MessageCard(props: MessageCardProps) {
  const { id, text, username, date } = props.message;
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const messages = useContext(MessagesContext);
  const updateMessage = useContext(UpdateMessagesContext);

  function updateText(text: string) {
    const updatedMessages: Message[] = messages?.map((message: Message) => {
      if (message.id === id) message.text = text;

      return message;
    });

    updateMessage(updatedMessages);
  }

  return (
    <article className='message-card'>
      <p className='message-card__date'>{date}</p>
      {showEdit ? (
        <textarea
          rows={10}
          cols={20}
          defaultValue={text}
          onBlur={() => setShowEdit(!showEdit)}
          onChange={(event) => {
            updateText(event.target.value);
          }}
        ></textarea>
      ) : (
        <p onClick={() => setShowEdit(!showEdit)}>{text}</p>
      )}

      <p className='message-card__username'>-{username}</p>
    </article>
  );
}

export default MessageCard;
