import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import React from 'react';
import { RootShell } from './components/RootShell';
import { MonsterDropsPage } from './pages/MonsterDrops.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootShell />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'monster-drops',
        element: <MonsterDropsPage />
      }
    ]
  }],
  { basename: '/IdleMMO-Hub/' }
);
export function Router() {
  return <RouterProvider router={router} />;
}