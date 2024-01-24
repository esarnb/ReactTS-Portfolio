
import '@mantine/core/styles.css';
import { theme } from './components/Theme/theme';
import '@mantine/code-highlight/styles.css';
import { MantineProvider, AppShell, Burger, Group, NavLink, UnstyledButton } from '@mantine/core';
import { Router } from './components/Router/Router';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from './components/ColorSchemeToggle/ColorSchemeToggle';
import { pages } from './constants/Nav';
import classes from './App.module.css';

export default function App() {
  const [opened, { toggle }] = useDisclosure();
  const PageButtons = () => pages.map(x =>
    <UnstyledButton className={classes.control}><NavLink
      href={x.path}
      label={x.label}
      leftSection={x.icon}
      description={x.description}
      active={window.location.pathname === x.path}
    /></UnstyledButton>
  );

  return (
    <>
      <MantineProvider theme={theme}>
        <AppShell
          header={{ height: 60 }}
          navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
          padding="md">

          <AppShell.Header>
            <Group h="100%" px="sm">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <Group justify="space-between" style={{ flex: 1 }}>
                <Group ml="sm" gap={0} visibleFrom="sm">
                  <PageButtons />
                </Group>
                <Group justify="right" style={{ flex: 1 }}>
                  <ColorSchemeToggle />
                </Group>
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