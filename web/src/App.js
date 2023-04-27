import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CommunityHome from "./pages/CommunityHome";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import RegisterPage from "./pages/RegisterPage";
import AuthStore from './contexts/AuthStore';
import ClaimsPage from "./pages/ClaimsPage";
import EventsPage from "./pages/EventsPage";
import ForumPage from "./pages/ForumPage";
import ContactsPage from "./pages/ContactsPage";
import ReservationsPage from "./pages/ReservationsPage";
import SettingsPage from "./pages/SettingsPage";


function App() {
  return (
    <>
      <AuthStore>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/communities/join" element={<JoinPage />} />
          <Route path="/communities/:id" element={<CommunityHome />} />
          <Route path="/communities/:id/claims" element={<ClaimsPage/>} />
          <Route path="/communities/:id/events" element={<EventsPage/>} />
          <Route path="/communities/:id/forumTopics" element={<ForumPage/>} />
          <Route path="/communities/:id/contacts" element={<ContactsPage/>} />
          <Route path="/communities/:id/reservations" element={<ReservationsPage/>} />
          <Route path="/communities/:id/users/:userId" element={<SettingsPage/>} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        <Footer />
      </AuthStore>
    </>
  );
}

export default App;
