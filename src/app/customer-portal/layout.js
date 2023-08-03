import Header from '../../container/Header';
import { Providers } from "../../redux/Provider";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Inter } from 'next/font/google';
import '../../style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Customer Portal'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/bharti_axa_logo.ico" />
      </head>
      <body>
      <Header/>
        <Providers>
          {children}
        </Providers>
        <ToastContainer
        className="toastContainer"
        autoClose={3000}
        hideProgressBar={true}
      />
      </body>
    </html>
  )
}
