import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import '../styles/globals.css'
import React from "react";

const font = Unbounded({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        {children}
      </body>
    </html>
  )
}
