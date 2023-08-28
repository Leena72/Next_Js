import Header from "../container/Header";
import { Providers } from "../redux/Provider";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Inter } from 'next/font/google';
import '@/style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Customer Portal'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         {/* uat billdesk links  */}
	  <script type="module" src="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.esm.js"></script>
    <script async noModule="" src="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk.js"></script>
    <link href="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.css" rel="stylesheet"/>
    
     {/* prod billdesk links  */}
  	{/* <script type="module" src="https://pay.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.esm.js"></script>
    <script async noModule="" src="https://pay.billdesk.com/jssdk/v1/dist/billdesksdk.js"></script>
    <link href="https://pay.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.css" rel="stylesheet"/> */}


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
