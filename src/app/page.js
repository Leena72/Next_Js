import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <main>
      <Dashboard />
      <ToastContainer
        className="toastContainer"
        autoClose={3000}
        hideProgressBar={true}
      />
    </main>
  )
}
