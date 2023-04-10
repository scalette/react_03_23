import React from 'react';
import ReactDOM from 'react-dom/client';
//import './fonts/swFont.ttf';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import CardList from './components/card-list/card-list.component';
import { Monster } from './routes/types';
import About from './routes/about';
import Forms from './components/forms/forms.component';
import { getData } from './utils/api/data';
import { Provider } from 'react-redux';
import store from './app/store';

const monsters: Monster[] = [
  {
    id: '1',
    name: 'Ilya',
    date: '11.01.2001',
    gender: 'male',
    permitions: {
      read: true,
      write: false,
      execute: true,
    },
    fruit: 'Orange',
    file: 'sdasd.txt',
  },
  // {
  //   id: '2',
  //   name: 'Vikotor',
  //   email: 'viktor@mail.ru',
  // },
  // {
  //   id: '3',
  //   name: 'Olga',
  //   email: 'olga@mail.ru',
  // },
  // {
  //   id: '4',
  //   name: 'Ilya',
  //   email: 'ilia@mail.ru',
  // },
  // {
  //   id: '5',
  //   name: 'Vikotor',
  //   email: 'viktor@mail.ru',
  // },
  // {
  //   id: '6',
  //   name: 'Olga',
  //   email: 'olga@mail.ru',
  // },
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
            loader: getData,
            element: <CardList />,
            //element: <CardList monsters={monsters} search={''} fundamentMonsters={monsters} />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'forms',
            element: <Forms />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
