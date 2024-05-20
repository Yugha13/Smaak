import {NextUIProvider} from "@nextui-org/react";
import OwnerPage from "./pages/Owner/OwnerPage";
import UserPage from "./pages/Users/UserPage";
const App = () => {
  const isOwner = true;
  return (
    <NextUIProvider>
      {isOwner?<OwnerPage/>:<UserPage/>}
    </NextUIProvider>
  )
}

export default App