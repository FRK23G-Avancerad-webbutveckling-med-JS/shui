import './AddMessage.scss';

import { useState, useContext } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

import { Message } from '../interfaces';
import { MessagesContext, UpdateMessagesContext } from '../App';

function AddMessage() {
  const [text, setText] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const publish = useContext(UpdateMessagesContext);
  const messages = useContext(MessagesContext);
  const navigate = useNavigate();

  function publishMessage() {
    const message: Message = {
      id: nanoid(), // Genererar ett slumpat id till detta meddelande för att lättare hitta det senare vid uppdatering
      text: text,
      username: username,
      date: new Date().toLocaleDateString(),
    };

    const addedMessage: Message[] = messages.concat(message); // Lägg till det senaste meddelandet i array:en och returnera en nya array som inte modifierar den gamla

    publish(addedMessage);

    navigate('/');
  }

  return (
    <section className='add-message'>
      <textarea
        className='add-message__text'
        rows={10}
        cols={20}
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></textarea>
      <input
        type='text'
        placeholder='Användarnamn'
        className='add-message__input'
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <button onClick={publishMessage} className='add-message__button'>
        Publicera
      </button>
    </section>
  );
}

export default AddMessage;
