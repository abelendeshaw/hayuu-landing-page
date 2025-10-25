import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hayyuu Technologies PLC - Empowering Education Through Technology',
  description: 'Leading provider of educational technology solutions in Ethiopia. Digital learning platforms, school management systems, and comprehensive EdTech consulting services.',
  keywords: 'education technology, Ethiopia, digital learning, school management, LMS, EdTech, educational software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
