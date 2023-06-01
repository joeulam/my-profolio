import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// METADATA IS FOR THE HEAD//

export const metadata = {
  title: 'Joey Lam',
  description: 'Joey Lam personal portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
