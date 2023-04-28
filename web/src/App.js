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
import ReservationPage from "./pages/ReservationPage";
import SettingsPage from "./pages/SettingsPage";
import PrivateRoute from "./guards/PrivateRoute";
import ContactDetail from "./components/contacts/contact-detail/ContactDetail";
import ContactPage from "./pages/ContactPage";
import ClaimPage from "./pages/ClaimPage";


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
          <Route path="/communities/:id/claims" element={<PrivateRoute><ClaimsPage/></PrivateRoute>} />
          <Route path="/communities/:id/claims/:claimId" element={<ClaimPage/>} />
          <Route path="/communities/:id/events" element={<PrivateRoute><EventsPage/></PrivateRoute> } />
          <Route path="/communities/:id/forumTopics" element={<ForumPage/>} />
          <Route path="/communities/:id/contacts" element={<ContactsPage/>} />
          <Route path="/communities/:id/contacts/:contactId" element={<ContactPage/>} />
          <Route path="/communities/:id/reservations" element={<ReservationsPage/>} />
          <Route path="/communities/:id/reservations/:reservationId" element={<ReservationPage/>} />
          <Route path="/communities/:id/users/:userId" element={<SettingsPage/>} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        <Footer />
      </AuthStore>
    </>
  );
}

export default App;
