import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Router } from './Router';

const App = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Router />
    </MantineProvider>
  );
}

export default App;