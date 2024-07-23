import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export const Welcome = () => {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        IdleMMO Hub
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        The place with all the helpful information and tools
      </Text>
    </>
  );
}