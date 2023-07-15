import '../style/App.scss'
import Header from '../container/Header';
import { Providers } from "../redux/Provider";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Customer Portal'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
