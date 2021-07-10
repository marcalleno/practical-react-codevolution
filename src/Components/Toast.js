import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      <button onClick={closeToast}>Klik disini untuk menutup notif</button>
    </div>
  );
};

toast.configure();
function Toast() {
  const notify = () => {
    toast("Notifikasi standar!", { position: toast.POSITION.TOP_LEFT });
    toast.success("Sukses!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    toast.info("Informasi!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
    toast.warn(<CustomToast />, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    toast.error("Error!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast("Notifikasi biasa", { position: toast.POSITION.BOTTOM_RIGHT });
  };

  return (
    <div>
      <button style={{ marginTop: "10rem" }} onClick={notify}>
        Klik untuk membuka notifikasi
      </button>
    </div>
  );
}

export default Toast;
