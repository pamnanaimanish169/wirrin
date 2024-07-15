import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CodeEditor from './components/CodeEditor/CodeEditor.tsx'
import Root from './Root.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Error 404 not found</div>
  },
  {
    path: "/:id",
    element: <CodeEditor />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
