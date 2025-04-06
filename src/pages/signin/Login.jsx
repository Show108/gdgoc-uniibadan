import React from "react";
import { FaUser } from "react-icons/fa";
import '@fontsource/poppins/300.css'
import { useEffect, useState } from "react";
import { Form, Outlet, useNavigate, useParams } from "react-router-dom";
import { Input } from "@chakra-ui/react"
;



export default function Login() {
  
  return (
    <div>
      <h1>Signup</h1>
      <Input/>
    </div>
  );
}
