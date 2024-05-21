import { Route, Routes } from "react-router-dom";
import MenuPage from "./MenuPage";
import Navbar from "./Navbar";

const UserPage = () => {
  return (
    <>
    <Navbar/>
    <div>
    <Routes>
        <Route path="/foods" element={<MenuPage/>}/>
    </Routes>
    </div>
    </>
  )
}

export default UserPage