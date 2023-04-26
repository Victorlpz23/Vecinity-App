import { Navigate, Route, Routes } from "react-router-dom";
import CommunitiesList from "./components/communities/communities-list/CommunitiesList";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UsersForm from "./components/users/users-form/UsersForm";
import UserLogin from "./components/users/users-login/UserLogin";
import UsersJoin from "./components/users/users-join/UsersJoin";
import CommunityHome from "./pages/CommunityHome";


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/signup" element={<UsersForm/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/communities/join" element={<UsersJoin/>} />
        <Route path="/communities/:id" element={<CommunityHome/>} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
