
import React from 'react';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import PaginaInicial from './screens/PaginaInicial';
import PaginaContato from './screens/PaginaContato';
import ErrorPage from './screens/ErrorPage';

// create the router
const router = createBrowserRouter(
  [
    {
      path: "*",
      // element: <RootNavigation />,
      Component: RootNavigation,
      // errorElement: <ErrorPage />,
      ErrorPage: ErrorPage,
    }
  ]
)

// the router provider is the top level component that will provide the router to all child components
function App() {
  return (
    <RouterProvider router={router} />
  );
}

// the routes component is where you list all the routes in your app
// each route has a path and a component
// path is the url path that the component will render on
// component is the component that will render when the path is matched
function RootNavigation() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path='/contato' element={<PaginaContato />} />
    </Routes>
  )
}

export default App;
