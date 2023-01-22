import { Text } from '@mantine/core';
import { Button, Group } from '@mantine/core';
import { Select, Image, Title } from '@mantine/core';




const Home =()=>{
    return(
        <>
        <Button variant="gradient" gradient={{ from: '#4B0082', to: '#00FFFF', deg: 35 }} onClick={() => window.history.back()}>Main Page</Button>
        </>
    );
}
export default Home;