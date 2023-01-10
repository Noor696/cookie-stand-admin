"use client";

import { Inter } from '@next/font/google'
import Hero from './components/Hero' 
import Form from './components/Form'
import Table from './components/Table'
import LoginForm from './components/LoginForm'
import {  useContext } from "react";
import { AuthContext } from "./contexts/auth";


const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  const {tokens} = useContext(AuthContext);
  return (
    // if token is not null ,show me these function : else show me the login
    (tokens ?
    <>
    {/* <LoginForm/> */}
    <Hero />
    <Form />
     {/* <Table /> */}
    </> :
    <LoginForm />
    )     
  )
}


