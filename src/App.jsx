import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { useState, createContext, useEffect } from "react";

import "./App.css";
import { Home } from "./pages/Home";
import About from "./pages/Message";
import Contact from "./pages/Task";
import RootLayouts from "./layouts/RootLayouts";

import Signup from "./pages/signin/Signup";

import RegisterLayout from "./layouts/RegisterLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/main" element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        
      </Route>
      <Route path="/" element={<RegisterLayout />}>
        <Route index element={<Signup />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
