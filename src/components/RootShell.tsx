import { AppShell, Stack } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { RootNavBar } from './RootNavBar';
import { PageProvider } from '@/providers/PageProvider';

export const RootShell = () => {
  return (
    <PageProvider>
        <AppShell
        navbar={{
            width: 200,
            breakpoint: 'sm',
            }}
            padding={0}
            >
        <AppShell.Navbar p='sm'>
            <Stack>
            <RootNavBar />
            </Stack>
        </AppShell.Navbar>
        <AppShell.Main>
            <Outlet />
        </AppShell.Main>
        </AppShell>
    </PageProvider>
  );
};
