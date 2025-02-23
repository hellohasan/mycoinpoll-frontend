import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "@sweetalert2/theme-dark/dark.css";

export function useSweetAlert() {
  const toast = (text, icon = "success") => {
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      showCloseButton: true,
      timer: 5000,
      timerProgressBar: true,
      title: text,
      icon,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  };

  const confirm = async (text, icon = "warning") => {
    const result = await Swal.fire({
      title: text,
      icon,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    });
    return result.isConfirmed;
  };

  const alert = (text, icon = "success") => {
    Swal.fire({
      title: text,
      icon,
    });
  };

  return {
    toast,
    confirm,
    alert,
  };
}
