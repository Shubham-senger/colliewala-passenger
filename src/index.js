import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginWithNumber from "./pages/loginwithno";
import Home from "./pages/Home";
import Login from "./pages/login";
import './index.css';
import Register1 from "./pages/register1";
import Register2 from "./pages/register2";
import OtpForm from "./pages/otpform";
import BookPage from "./components/Booking/BookPage";
import GeolocatorPage from "./components/Booking/GeolocatorPage";
import PNRStation from "./components/Booking/PNRstation";
import ProgressBar from "./components/ProgressBar";
import BillDetailsCard from "./components/BillCardDetails";
import Luggage from "./pages/Luggage";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/luggage" element={<Luggage/>} />
      <Route path="/billcard" element={<BillDetailsCard/>}/>
      <Route path="timeline" element={<ProgressBar/>} />
      <Route path="/pnrstation" element={<PNRStation/>} />
      <Route path="/geolocator" element={<GeolocatorPage />} />
        <Route path="/book" element={<BookPage/>} />
        <Route path="/register/1" element={<Register1/>}></Route>
        <Route path="/register/2" element={<Register2/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/loginwithnumber" element={<LoginWithNumber/>}></Route>
        <Route path="/otpform" element={<OtpForm/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
