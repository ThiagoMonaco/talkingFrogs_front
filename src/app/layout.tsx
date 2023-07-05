import './globals.css'
import { Poppins } from 'next/font/google'
import React from 'react'
import { CustomTheme } from '@/app/CustomTheme'
import { UserProvider } from '@/context/UserContext'

const poppins = Poppins({
    weight: ['400', '600','700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    title: 'Talking Frogs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <UserProvider>
          <CustomTheme>
              <html lang="en">
              <body className={poppins.className}>{children}</body>
              </html>
          </CustomTheme>
      </UserProvider>
  )
}
