import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  }],
  { basename: '/IdleMMO-Hub/' }
);
export function Router() {
  return <RouterProvider router={router} />;
}