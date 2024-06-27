import Head from "next/head"
import css from "styled-jsx/css"

import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm_plex_sans',
  weight: "100"
})

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function Layout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibm_plex_sans.variable}>
        {children}
      </body>
    </html>
  )
}