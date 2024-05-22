import { NextUIProvider } from "@nextui-org/react";
import Private from "./Private";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";

const App = () => {
  return (
    <NextUIProvider>
     
      <Private/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </NextUIProvider>
  )
}

export default App