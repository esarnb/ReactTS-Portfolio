
import '@mantine/core/styles.css';
import { useState } from 'react';
import { AppShell, Burger, Group, MantineProvider, NavLink, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './App.module.css';
import { pages } from './constants/Nav';
import { ColorSchemeToggle } from './components/ColorSchemeToggle/ColorSchemeToggle';
import { Router } from './components/Router/Router';
import { theme } from './components/Theme/theme';

export default function App() {
  const [active, setActive] = useState(0);
  const [opened, { toggle }] = useDisclosure();

  const PageButtons = () => pages.map((x: any, index: number) =>
    <UnstyledButton className={classes.control}><NavLink
      href={x.path}
      label={x.label}
      leftSection={x.icon}
      description={x.description}
      active={index === active}
      onClick={() => setActive(index)}
    /></UnstyledButton>
  );

  return (
    <>
      <MantineProvider theme={theme}>
        <AppShell
          header={{ height: 60 }}
          navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
          padding="md"
        >
          <AppShell.Header>
            <Group h="100%" px="sm">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <Group justify="space-between" style={{ flex: 1 }}>
                <Group ml="sm" gap={0} visibleFrom="sm">
                  <PageButtons />
                </Group>
                <ColorSchemeToggle />
              </Group>
            </Group>
          </AppShell.Header>
          <AppShell.Navbar py="md" px={4}>
            <PageButtons />
          </AppShell.Navbar>
          <AppShell.Main>
            <Router />
          </AppShell.Main>
        </AppShell>
      </MantineProvider>

    </>
  );
}