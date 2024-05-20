import { NextUIProvider } from "@nextui-org/react";
import Private from "./Private";
const App = () => {
  return (
    <NextUIProvider>
      <Private/>
    </NextUIProvider>
  )
}

export default App