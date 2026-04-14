import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Profile from "./Profile";
import Register from "./Register";
import About from "./About";
import Contact from "./Contact";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;