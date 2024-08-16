import './ViewMessages.scss';
import penIcon from '../assets/penIcon.svg';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { MessagesContext } from '../App';
import { Message } from '../interfaces';

import MessageCard from '../components/MessageCard';

function ViewMessage() {
  const messages: Message[] = useContext(MessagesContext);
  const navigate = useNavigate();

  const cardComponents = messages?.map((message: Message) => {
    return <MessageCard message={message} key={message.id} />;
  });

  return (
    <section className='view-messages'>
      {cardComponents}{' '}
      <button
        className='view-messages__button'
        onClick={() => {
          navigate('/add');
        }}
      >
        <img src={penIcon} />
      </button>
    </section>
  );
}

export default ViewMessage;
