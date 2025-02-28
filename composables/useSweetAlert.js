import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "@sweetalert2/theme-dark/dark.css";

export function useSweetAlert() {
  const getIconTitle = (icon, customTitle = null) => {
    const iconTitles = {
      success: "Well Done!",
      error: "Error!",
      warning: "Warning!",
      info: "Information",
      question: "Question",
    };
    return customTitle || iconTitles[icon] || "Notice";
  };

  const toast = (text, icon = "success", customTitle = null) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      showCloseButton: true,
      timer: 5000,
      timerProgressBar: true,
      text,
      icon,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  };

  const confirm = async (text, icon = "warning", title = "Are you sure?") => {
    const result = await Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    });
    return result.isConfirmed;
  };

  const alert = (text, icon = "success", customTitle = null) => {
    const title = getIconTitle(icon, customTitle);
    Swal.fire({
      title,
      text,
      icon,
    });
  };

  return {
    toast,
    confirm,
    alert,
  };
}
