'use client';
import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { AuthWrapper } from "./contexts/auth";
import ThemeWrapper from "./contexts/theme";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <AuthWrapper>
      <ThemeWrapper>
      <body className="dark:bg-black">
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
      </ThemeWrapper>
      </AuthWrapper>
    </html>
  )
}
