import { Text } from "@mantine/core";
import { Button, Group,Select, Image, Title,TextInput, Loader,Switch, useMantineTheme } from "@mantine/core";
import { IconSun, IconMoonStars } from '@tabler/icons';
import { IconAt } from '@tabler/icons';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';



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
   
    <TextInput label="Name" placeholder="Name"  style={{marginLeft:"550px", width:"200px"}}/>
    <TextInput label="email" placeholder="Email"   style={{marginLeft:"550px", width:"200px"}}/>

    <footer>
        <Text>FOR EMERGENCIES:</Text>
        <Text>Call 1-833-456-4566 and Text 45645</Text>
      </footer>
    </>
  )
}
export default Home;
