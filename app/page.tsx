"use client";

import { Inter } from '@next/font/google'
import Hero from './components/Hero' 
import Form from './components/Form'
import Table from './components/Table'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Hero />
     <Form />
     <Table />
    </>      
  )
}


