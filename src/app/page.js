import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./customer-portal/dashboard/page"; 

export default function Home() {
  return (
    <main>
      {(typeof window !== 'undefined') && <Dashboard />}
    </main>
  )
}
