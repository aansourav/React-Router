import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './Contact'
import EditContact from './EditContact'
import ErrorPage from './Error'
import Index from './Index'
import Root from './Root'
import {
  contactFavourite,
  createContactAction,
  deleteContactAction,
  editContactAction
} from './actions/conatctsActions'
import './index.css'
import { contactLoader, contactsLoader } from './loaders/contactsLoader'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: contactsLoader,
    action: createContactAction,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
        action: contactFavourite
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editContactAction
      },
      {
        path: 'contacts/:contactId/destroy',
        action: deleteContactAction,
        errorElement: <div>Oops! There was an error deleting the contact.</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
