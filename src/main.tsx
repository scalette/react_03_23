import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import CardList from "./components/card-list/card-list.component";
import { Monster } from "./routes/types";
import { loader as rootLoader } from "./routes/root";

const monsters: Monster[] = [
  {
    id: "1",
    name: "Ilya",
    email: "ilia@mail.ru",
  },
  {
    id: "2",
    name: "Vikotor",
    email: "viktor@mail.ru",
  },
  {
    id: "3",
    name: "Olga",
    email: "olga@mail.ru",
  },
  {
    id: "4",
    name: "Ilya",
    email: "ilia@mail.ru",
  },
  {
    id: "5",
    name: "Vikotor",
    email: "viktor@mail.ru",
  },
  {
    id: "6",
    name: "Olga",
    email: "olga@mail.ru",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <CardList monsters={monsters} />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
