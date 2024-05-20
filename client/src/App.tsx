import FoodPage from "./pages/Owner/FoodPage"
import NewFood from "./pages/Owner/NewFood"
import { Route, Routes } from "react-router-dom"
import  Navbar  from "./components/common/Navbar"
import {NextUIProvider} from "@nextui-org/react";
import MenuPage from "./pages/Users/MenuPage";

const App = () => {
  return (
    <NextUIProvider>
      <Navbar/>
      <div className="grid gap-10 h-screen place-items-center mt-10">
      <Routes>
        <Route path="/foods" element={<FoodPage/>}/>
        <Route path="/addfood" element={<NewFood/>}/>
        <Route path="/viewfood" element={<MenuPage/>}/>
      </Routes>
      </div>
    </NextUIProvider>
  )
}

export default App