import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authorization from './pages/Authorization/Authorization';
import ErrorPage from './pages/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Authorization />,
      errorElement: <ErrorPage />,
    },
  ], { basename: '/frontend' });

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
