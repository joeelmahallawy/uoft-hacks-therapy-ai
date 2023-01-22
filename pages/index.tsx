
import { Text } from '@mantine/core';
import { Button, Group } from '@mantine/core';
import { Select, Image, Title } from '@mantine/core';


import {
  NavigationProgress,
  incrementNavigationProgress,
  decrementNavigationProgress,
  setNavigationProgress,
  startNavigationProgress,
  stopNavigationProgress,
  resetNavigationProgress,
  completeNavigationProgress,
} from "@mantine/nprogress";
function Demo() {
    return (
          <>
       <NavigationProgress />
  <Group position="center" style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{marginLeft: "500px"}}>
  <Button variant="gradient" gradient={{ from: '#4B0082', to: '#00FFFF', deg: 35 }} style={{ marginRight: '10px' }} onClick={() => window.location.href='/home'}>Home</Button>
  <Button variant="gradient" gradient={{ from: '#4B0082', to: '#00FFFF', deg: 35 }} style={{ marginRight: '10px' }} onClick={() => window.location.href='/chat'}>Chat</Button>
  <Button variant="gradient" gradient={{ from: '#4B0082', to: '#00FFFF', deg: 35 }} onClick={() => window.location.href='/settings'}>Account Settings</Button>
</div>

    <div style ={{marginRight:"50px"}} >
    <Button variant="gradient" gradient={{ from: '#4B0082', to: '#00FFFF', deg: 35 }}>Sign Up/Log In</Button></div>
  </Group>
</>
   );
}
const IndexPage = () => {
    return (
      <>
        <>
        <br></br>

        <Demo />
        </><br></br><br></br><br></br><br></br><>

      <Group position="center">
<>

<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <Title 
          order={3} size="h1" variant="gradient"
          gradient={{ from: '#ed6ea0', to: '#00FFFF', deg: 35 }}>
          I want to talk about...
    </Title>
    <Select
          placeholder="Select"
          data={[{ value: 'family', label: 'Family' },
          { value: 'stress', label: 'Stress' }, 
          { value: 'anxiety', label: 'Anxiety' },
          { value: 'drugs', label: 'Drug Related Issues' },
          { value: 'relationships', label: 'Relationships' },
          { value: 'other', label: 'Other' }, ]} 
          style={{fontSize: '12px', width: "150px"}}
    />
</div>


         </><br></br>
         

      </Group>        
      <Group position="center" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <Group style={{flex: 1}}><br></br><br></br>
    <Image src="https://img.freepik.com/premium-photo/teddy-bears-with-bouquet-red-roses-black-background-selective-focus_309761-311.jpg?w=1480" alt="Alternate text" width = "500px" />
  </Group>
  <Group style={{flex: 1}}>
    <Button variant="gradient" gradient={{ from: '#4B0082', to: '#00FFFF', deg: 35 }} onClick={() => window.location.href='/chat'}>Speak Now</Button>
  </Group>
</Group>
          </></>
        
    
    );
        }
    
  export default IndexPage;
 

