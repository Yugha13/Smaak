import { Route, Routes } from "react-router-dom";
import MenuPage from "./MenuPage";
import Navbar from "./Navbar";

const UserPage = () => {
  return (
    <>
    <Navbar/>
    <div className="grid gap-10 h-screen place-items-center mt-10">
    <Routes>
        <Route path="/foods" element={<MenuPage/>}/>
    </Routes>
    </div>
    </>
  )
}

export default UserPage