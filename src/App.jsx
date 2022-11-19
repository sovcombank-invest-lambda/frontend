import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authorization from './pages/Authorization/Authorization';
import ErrorPage from './pages/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      basename: "/frontend",
      path: "/",
      element: <Authorization />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
