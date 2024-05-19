import FoodPage from "./pages/Owner/FoodPage"
import NewFood from "./pages/Owner/NewFood"
import { Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <div className="grid gap-10 h-screen place-items-center mt-10">
      <Routes>
        <Route path="/foods" element={<FoodPage/>}/>
        <Route path="/addfood" element={<NewFood/>}/>
      </Routes>
    </div>
  )
}

export default App