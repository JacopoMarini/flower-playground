import Flower from "@stackhouseos/flower-react";
import { FlowerNode } from "@stackhouseos/flower-react";
import { FlowerRoute } from "@stackhouseos/flower-react";
import { Stack } from "./components/Stack";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <Flower name="flower-playground">
        <FlowerRoute id="Start" to={{ "step-1": null }} />

        <FlowerNode id="step-1">
          <Stack
            direction="column"
            justifyContent="start"
            alignItems="start"
            gap="32"
          >
            <Input
              alwaysDisplay={false}
              id="name"
              label="Name"
              placeholder="Name"
            />
            <Input
              alwaysDisplay={false}
              id="email"
              label="Email"
              placeholder="Email"
            />
            <Input
              alwaysDisplay={false}
              id="password"
              label="Password"
              placeholder="Password"
              variant="password"
            />
          </Stack>
        </FlowerNode>
      </Flower>
    </div>
  );
}
export default App;
