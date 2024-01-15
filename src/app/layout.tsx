import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Provider } from './Provider'

const sans = Open_Sans({ subsets: ['latin'], weight: '400' })

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
      <body className={sans.className}>
        <Provider>{children}</Provider></body>
    </html>
  )
}
