import '@/Style/App.scss';

import Footer from "@/Components/Footer/page";
import Navigation from "@/Components/Navigation/page";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
debugger
  return (
    <html lang="en">
      <body>
      <Navigation />
        <div className='main-body'>
        {children}
        </div>
      <Footer />
        
        </body>
    </html>
  )
}
