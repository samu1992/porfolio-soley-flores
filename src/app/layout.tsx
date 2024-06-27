import './globals.css'
import type { Metadata } from 'next'
import { NavBar, Footer } from '@/components'
import { Manrope } from 'next/font/google'

const myFont = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "200", "300", "400", "500", "600", "700", "800"]
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
