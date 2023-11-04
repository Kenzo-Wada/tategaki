'use client';
import { AppShell, Avatar, Burger, Button, Flex, Group, Title, UnstyledButton } from '@mantine/core';

interface Props {
  children: React.ReactNode;
}

export const MainLayout = (props: Props) => {
  const { children } = props;

  return (
    <AppShell padding={'md'}>
      <AppShell.Header>
        <Group justify="space-between" p={'sm'}>
          <UnstyledButton>
            <Title>Tategaki</Title>
          </UnstyledButton>
          <Group>
            <Button variant="transparent">contact</Button>
            <Button>Write</Button>
            <Avatar radius="xl" />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
