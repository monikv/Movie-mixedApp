import PersistentDrawerLeft from "../Component/Search";
import Weather from "../Component/Weather";
import { Routes, Route } from "react-router-dom";
import Home from "../Component/Home";
import About from "../Component/About";
import Contacts from "../Component/Contacts";
import Todo from "../Component/Todo/Todo";
import Login from "../loginDashboard/Login";
import Dashboard from "../loginDashboard/Dashboard";
import Jobs from "../Component/Jobs"; // Import the new Jobs component

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/search" element={<PersistentDrawerLeft />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<Contacts />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/jobs" element={<Jobs />} /> {/* Add the new Jobs route */}
    </Routes>
  );
}