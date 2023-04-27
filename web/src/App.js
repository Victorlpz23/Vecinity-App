import { Navigate, Route, Routes } from "react-router-dom";
import CommunitiesList from "./components/communities/communities-list/CommunitiesList";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CommunityHome from "./pages/CommunityHome";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import RegisterPage from "./pages/RegisterPage";
import AuthStore from './contexts/AuthStore';


function App() {
  return (
    <>
      <AuthStore>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/signup" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/communities/join" element={<JoinPage />} />
          <Route path="/communities/:id" element={<CommunityHome />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        <Footer />
      </AuthStore>
    </>
  );
}

export default App;
