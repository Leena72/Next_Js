'use client'
import { toast } from "react-toastify";

const CustomToast = ({ message, cssClass, icon }) => {
  if (typeof window !== "undefined") {
    let toastEl = document.getElementsByClassName('custom-toast-container')[0];
    let toastmsgEl = document.querySelector('.custom-toast-container .success_text');
    if (toastEl && (toastmsgEl && toastmsgEl.innerText === message)) {
        return null;
    }
    else {
        return (
            <div className={`custom-toast-container ${cssClass}`}>
                {/* <img src={icon ? icon : correctImg} alt="" /> */}
                <span className="success_text">{message}</span>
            </div>
        );
    }
}
}

export const toaster = (type, msg, heading) => {
    const text = msg || "Something went wrong !";
    switch (type) {
        case "success":
            toast.success(<CustomToast message={text} cssClass="toast-success" />, { position: toast.POSITION.BOTTOM_RIGHT, type: 'success' });
            break;
        case "error":
            toast.error(<CustomToast message={text} cssClass="toast-error" />, { position: toast.POSITION.BOTTOM_RIGHT, type: 'error' });
            break;
        case "warn":
            toast.warn(<CustomToast message={text} cssClass="toast-error" />, { position: toast.POSITION.BOTTOM_RIGHT, type: 'error' });
            break;
        case "info":
            toast.info(<CustomToast message={text} cssClass="toast-info" />, { position: toast.POSITION.BOTTOM_RIGHT, type: 'success' });
            break;
        default:
            toast.info(<CustomToast message={text} cssClass="toast-info" />, { position: toast.POSITION.BOTTOM_RIGHT, type: 'success' });
    }
};