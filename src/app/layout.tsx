import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from './Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ustav Portfolio ',
  description: 'My personal portfolio which you can see my certificates, what im currently doing and things i like.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Provider>{children}</Provider></body>
    </html>
  )
}
