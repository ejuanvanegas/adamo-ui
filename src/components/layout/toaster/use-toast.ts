import { useContext } from "react";
import { ToasterContext } from "@src/components/layout/toaster/toaster";

export function useToast() {
  const context = useContext(ToasterContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
