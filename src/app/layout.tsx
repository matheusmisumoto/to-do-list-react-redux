import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import StoreProvider from './StoreProvider'

export const metadata: Metadata = {
  title: 'To Do List',
  description: 'To-Do list created created with Next.js.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <StoreProvider>
      <html lang='en'>
        <body>
          <div id='root' className={`${inter.className} container`}>{children}</div>
        </body>
      </html>
      </StoreProvider>
    )
  }