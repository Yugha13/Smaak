import OwnerPage from "./pages/Owner/OwnerPage";
import UserPage from "./pages/Users/UserPage";

const Private = () => {
  const isOwner = true;
  const isloggedIn = true;
  return (
    <>
      {isloggedIn && isOwner?<OwnerPage/>:<UserPage/>}
    </>
  )
}

export default Private