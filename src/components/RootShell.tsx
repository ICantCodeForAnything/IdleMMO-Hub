import { AppShell, Stack } from '@mantine/core';
import { Link, Outlet } from 'react-router-dom';

export const RootShell = () => {
  return (
    <AppShell
      navbar={{
        width: 150,
        breakpoint: 'sm',
      }}
      padding={0}
    >
      <AppShell.Navbar p="md">
        <Stack>
          <Link to="/">Home</Link>
          <Link to="/monster-drops">Monster Drops</Link>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
