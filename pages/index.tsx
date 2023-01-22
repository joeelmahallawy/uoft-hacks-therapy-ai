import { Button, Group } from "@mantine/core";
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
      <Group color="#CF9FFF" position="center">
        <Button color="#CF9FFF" onClick={() => incrementNavigationProgress(10)}>
          Add 10%
        </Button>
        <Button color="#CF9FFF" onClick={() => decrementNavigationProgress(10)}>
          Decrease 10%
        </Button>
        <Button onClick={() => setNavigationProgress(50)}>Set 50%</Button>
        <Button onClick={() => startNavigationProgress()}>Start</Button>
        <Button onClick={() => stopNavigationProgress()}>Stop</Button>
        <Button onClick={() => resetNavigationProgress()}>Reset</Button>
        <Button onClick={() => completeNavigationProgress()}>Finish</Button>
      </Group>
    </>
  );
}
const IndexPage = () => {
  return <Demo />;
};
export default IndexPage;
