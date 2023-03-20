import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import CardList from './components/card-list/card-list.component';
import { Monster } from './routes/types';
import About from './routes/about';

const monsters: Monster[] = [
  {
    id: '1',
    name: 'Ilya',
    email: 'ilia@mail.ru',
  },
  {
    id: '2',
    name: 'Vikotor',
    email: 'viktor@mail.ru',
  },
  {
    id: '3',
    name: 'Olga',
    email: 'olga@mail.ru',
  },
  {
    id: '4',
    name: 'Ilya',
    email: 'ilia@mail.ru',
  },
  {
    id: '5',
    name: 'Vikotor',
    email: 'viktor@mail.ru',
  },
  {
    id: '6',
    name: 'Olga',
    email: 'olga@mail.ru',
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <CardList monsters={monsters} search={''} fundamentMonsters={monsters} />,
          },
          {
            path: 'about',
            element: <About />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
