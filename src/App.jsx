import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authorization from './pages/Authorization/Authorization';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authorization />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
