import FoodPage from "./pages/Owner/FoodPage"
import NewFood from "./pages/Owner/NewFood"
import { Route, Routes } from "react-router-dom"
import { NabBar } from "./components/common/Navbar"

const App = () => {
  return (
    <div className="">
      <NabBar/>
      <div className="grid gap-10 h-screen place-items-center mt-10">
      <Routes>
        <Route path="/foods" element={<FoodPage/>}/>
        <Route path="/addfood" element={<NewFood/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App