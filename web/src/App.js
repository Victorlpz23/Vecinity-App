import { Navigate, Route, Routes } from "react-router-dom";
import CommunitiesList from "./components/communities/communities-list/CommunitiesList";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/communities" element={<CommunitiesList />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
