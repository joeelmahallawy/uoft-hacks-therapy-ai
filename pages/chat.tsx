import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Footer,
  Aside,
  Text,Button,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
           
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
 
        </Footer>
      }
    >
       <Button variant="gradient" gradient={{ from: '#4B0082', to: '#00FFFF', deg: 35 }} onClick={() => window.history.back()}>Main Page</Button>
    </AppShell>
  );
}