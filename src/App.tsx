import '@mantine/core/styles.css';
import { AppShell, Group, MantineProvider, Text } from '@mantine/core';
import { theme } from './theme';
import { Router } from './Router';

const App = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell
        navbar={{
          width: 150,
          breakpoint: 'sm',
        }}
        padding="md"
      >
        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
        <AppShell.Main>
          <Router />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;