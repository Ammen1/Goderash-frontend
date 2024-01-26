import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./admin/Home.jsx";
import Homepage from "./components/Homepage.jsx";
// import Footer from "./components/Footer.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Register from "./pages/Register.jsx";
import Fuel from "./pages/Fuel.jsx";
import CarWash from "./pages/CarWash.jsx";
import EngineOil from "./pages/EngineOil.jsx";
import Battery from "./pages/Battery.jsx";
import Tyre from "./pages/Tyre.jsx";
import Emergance from "./pages/Emergance.jsx";
import Orderpage from "./pages/Orderpage.jsx";
import FuelOrderPage from "./pages/OrderFuel.jsx";
import OrderBattery from "./pages/OrderBattery.jsx";
import TyreOrder from "./pages/TyreOrder.jsx";
import OrderCarWash from "./pages/OrderCarWash.jsx";
import OrderOil from "./pages/OrderOil.jsx";
import OrderPage from "./pages/OrderDetails.jsx";
import AddCar from "./pages/AddCar.jsx";
import Payment from "./pages/Payment.jsx";
import Calendar from "./admin/Calendar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fuel" element={<Fuel />} />
        <Route path="/tyre" element={<Tyre />} />
        <Route path="/carwash" element={<CarWash />} />
        <Route path="/battery" element={<Battery />} />
        <Route path="/engineoil" element={<EngineOil />} />
        <Route path="/emergance" element={<Emergance />} />
        <Route path="/orderpage" element={<Orderpage />} />
        <Route path="/order-fuel" element={<FuelOrderPage />} />
        <Route path="/order-battery" element={<OrderBattery />} />
        <Route path="/order-tyre" element={<TyreOrder />} />
        <Route path="/order-carwash" element={<OrderCarWash />} />
        <Route path="/order-engineoil" element={<OrderOil />} />
        <Route path="/orderdetails" element={<OrderPage />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/calender" element={<Calendar />} />
      </Routes>
    </AuthProvider>
  </Router>
);
