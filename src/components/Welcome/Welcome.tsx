import { Title, Text, Anchor, Stack } from '@mantine/core';
import classes from './Welcome.module.css';

export const Welcome = () => {
  return (
    <Stack align='center'>
      <Title className={classes.title} mt={100}>
        IdleMMO Hub
      </Title>
      <Text c="dimmed" size="lg" maw={580}>
        The place with all the helpful information and tools
      </Text>
    </Stack>
  );
}