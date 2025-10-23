import toast from "react-hot-toast";

export const showToast = (message, type = "success") => {
  toast[type](message, {
    duration: 3000,
    position: "top-right",
    style: {
      borderRadius: "10px",
      background: type === "success" ? "#4CAF50" : "#f44336",
      color: "#fff",
      padding: "14px 20px",
      fontWeight: "bold",
      fontSize: "15px",
    },
  });
};