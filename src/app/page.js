import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from "./login/page"

export default function Home() {
  return (
    <main>
      <Login />
      <ToastContainer
        className="toastContainer"
        autoClose={3000}
        hideProgressBar={true}
      />
    </main>
  )
}
