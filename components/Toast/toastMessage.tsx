import { Bounce, toast } from "react-toastify";

type NotificationTypeValues = "success" | "info" | "error" | "warning"

export const toastMessage = (
  text: string,
  notificationType: NotificationTypeValues
) =>
  toast(text, {
    type: notificationType,
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
