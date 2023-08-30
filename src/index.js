import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import IssuesPage from './pages/IssuesPage';
import IssuesDetail from './pages/IssuesDetail';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <IssuesPage />,
      },
      {
        path: '/issues/:id',
        element: <IssuesDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
