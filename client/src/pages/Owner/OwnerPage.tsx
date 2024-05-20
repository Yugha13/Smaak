import { Route, Routes } from "react-router-dom"
import FoodPage from "./FoodPage"
import NewFood from "./NewFood"
import Navbar from "@/pages/Owner/Navbar"

const OwnerPage = () => {
  return (
    <>
    <Navbar/>
    <div className="grid gap-10 h-screen place-items-center mt-10">
    <Routes>
        <Route path="/foods" element={<FoodPage/>}/>
        <Route path="/addfood" element={<NewFood/>}/>
    </Routes>
    </div>
    </>
  )
}

export default OwnerPage