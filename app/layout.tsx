import Navbar from '@/components/nav-components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aviroop Jana | Portfolio',
  description: 'Portfolio website made using Next Js, Tailwind, Framer motion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` bg-[#030014] overflow-y-scroll overflow-x-hidden  transition_ ${inter.className}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
