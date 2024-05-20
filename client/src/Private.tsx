import Navbar from "./components/common/Navbar";
import OwnerPage from "./pages/Owner/OwnerPage";
import UserPage from "./pages/Users/UserPage";

const Private = () => {
  const isOwner = !true;
  const isloggedIn = !true;
  return (
    <>
      {!isloggedIn?<Navbar/>:""}
      {isloggedIn && (isOwner?<OwnerPage/>:<UserPage/>)}
    </>
  )
}

export default Private