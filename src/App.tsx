import './App.scss';

import { useState, createContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

import { Message } from './interfaces';

const MessagesContext = createContext<Message[]>([]);
const UpdateMessagesContext = createContext<(messages: Message[]) => void>(
  () => {}
);

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <main>
      <MessagesContext.Provider value={messages}>
        <UpdateMessagesContext.Provider value={setMessages}>
          <RouterProvider router={router} />
        </UpdateMessagesContext.Provider>
      </MessagesContext.Provider>
    </main>
  );
}

export { MessagesContext, UpdateMessagesContext };

export default App;
