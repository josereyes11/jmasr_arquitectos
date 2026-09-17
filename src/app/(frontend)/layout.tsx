import React from 'react'
import './styles.css'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import { museoSans } from '@/fonts/museo'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={museoSans.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
