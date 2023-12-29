import './globals.css'
import type { Metadata } from 'next'
import { NavBar, Footer } from '@/components'
import localFont from "next/font/local"

const myFont = localFont({
  src: '../assets/font/Trap-ExtraBold.otf',
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'Soley Flores',
  description: 'Porfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={myFont.style}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
