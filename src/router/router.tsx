import { createBrowserRouter } from 'react-router-dom';

import AddMessage from '../views/AddMessage';
import ViewMessage from '../views/ViewMessage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ViewMessage />,
  },
  {
    path: '/add',
    element: <AddMessage />,
  },
]);

export default router;
