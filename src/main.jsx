import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import ErrorPage from "./Error";
import Root from "./Root";
import { createContactAction } from "./actions/conatctsActions";
import "./index.css";
import { contactLoader, contactsLoader } from "./loaders/contactsLoader";
import EditContact from "./EditContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: contactsLoader,
    action: createContactAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact/>,
        loader: contactLoader
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
