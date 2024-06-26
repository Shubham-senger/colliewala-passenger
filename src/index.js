import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './index.css';

import OtpForm from "./pages/otpform";
import BookPage from "./components/Booking/BookPage";
import GeolocatorPage from "./pages/GeolocatorPage";
import PNRStation from "./components/Booking/PNRstation";
import ProgressBar from "./components/ProgressBar";
import BillDetailsCard from "./components/BillCardDetails";
import Luggage from "./pages/Luggage";

import MultiStepLogin from "./pages/Login";
import Register from "./pages/Register";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<MultiStepLogin/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/luggage" element={<Luggage/>} />
        <Route path="/billcard" element={<BillDetailsCard/>}/>
        <Route path="timeline" element={<ProgressBar/>} />
        <Route path="/pnrstation" element={<PNRStation/>} />
        <Route path="/geolocator" element={<GeolocatorPage />} />
        <Route path="/book" element={<BookPage/>} />
        <Route path="/otpform" element={<OtpForm/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
