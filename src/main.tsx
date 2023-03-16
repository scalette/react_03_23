import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import App from './components/App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import PageNotExists from './components/page-not-exists/page-not-exists';
import Contact, { loader as contactLoader,
  action as contactAction} from './routes/contacts/contacts'
import EditContact, {action as editAction, destroyAction} from './routes/edit/edit'
import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageNotExists />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <PageNotExists />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>
          },
        ]
      }

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
