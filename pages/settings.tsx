import { Text } from "@mantine/core";
import { Button, Group,Select, Image, Title,TextInput, Loader,Switch, useMantineTheme } from "@mantine/core";
import { IconSun, IconMoonStars } from '@tabler/icons';

function Demo() {
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <Switch
        size="md"
        color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
        onLabel={<IconSun size={16} stroke={2.5} color={theme.colors.yellow[4]} />}
        offLabel={<IconMoonStars size={16} stroke={2.5} color={theme.colors.blue[6]} />}
      />
    </Group>
  );
}
const Home = () => {
  return (
    <>
    
      <Button
        variant="gradient"
        gradient={{ from: "#4B0082", to: "#00FFFF", deg: 35 }}
        onClick={() => window.history.back()}
      >
        Main Page
      </Button>
        <Demo />
       <TextInput label="Your email" placeholder="Your email" rightSection={<Loader size="xs" />} />;

    <footer>
        Call 
    </footer>
    </>
  );
};
export default Home;
