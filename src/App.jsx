import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer"
import Landingpage  from "./components/Landingpage"
import Navbar from "./components/Navbar"
import DiagnosePage from "./components/DiagnosePage";
import HasilDiagnose from "./components/HasilDiagnose";
import Infonutrisi from "./components/Infonutrisi";
import Login from "./components/Login";
import Register from "./components/Register";
import Infopenyakit from "./components/Infopenyakit";

// Import komponen admin
import Sidebar from "./components/admin/Sidebar";
import DashboardContent from "./components/admin/DashboardContent";
import Pengaturan from "./components/admin/Pengaturan";
import Profile from "./components/admin/Profile";
import PengunjungHistory from "./components/admin/PengunjungHistory";

function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute pengguna biasa */}
        <Route path="/" element={<UserLayout><Landingpage /></UserLayout>} />
        <Route path="/diagnose" element={<UserLayout><DiagnosePage /></UserLayout>} />
        <Route path="/hasil" element={<UserLayout><HasilDiagnose /></UserLayout>} />
        <Route path="/infonutrisi" element={<UserLayout><Infonutrisi /></UserLayout>} />
        <Route path="/login" element={<UserLayout><Login /></UserLayout>} />
        <Route path="/register" element={<UserLayout><Register /></UserLayout>} />
        <Route path="/infopenyakit" element={<UserLayout><Infopenyakit /></UserLayout>} />

        {/* Rute admin */}
        <Route path="/admin" element={
          <div style={{ display: "flex" }}>
            <Sidebar />
            <DashboardContent />
          </div>
        } />
        <Route path="/admin/pengunjung" element={
          <div style={{ display: "flex" }}>
            <Sidebar />
            <PengunjungHistory />
          </div>
        } />
        <Route path="/admin/pengaturan" element={
          <div style={{ display: "flex" }}>
            <Sidebar />
            <Pengaturan />
          </div>
        } />
        <Route path="/admin/profile" element={
          <div style={{ display: "flex" }}>
            <Sidebar />
            <Profile />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;