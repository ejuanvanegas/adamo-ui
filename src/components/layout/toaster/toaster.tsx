import type { AnimationEventHandler, PropsWithChildren } from "react";
import { createContext, useState, useCallback, useEffect, createElement, useRef } from "react";
import { Portal } from "@radix-ui/react-portal";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@src/lib/utils";

const toastVariants = cva(
  "adm:w-full adm:h-14 adm:p-4 adm:inline-flex adm:justify-center adm:items-center adm:gap-6 adm:shadow-sm",
  {
    variants: {
      variant: {
        default: "adm:bg-primary-200 adm:text-neutrals-700",
        destructive: "adm:bg-destructive-50 adm:text-destructive",
        success: "adm:bg-success-50 adm:text-success",
        warning: "adm:bg-warning-50 adm:text-warning",
      },
    },
  },
);

type ToastOptions = {
  id?: string
  message: string
  variant?: VariantProps<typeof Toast>["variant"]
  autoClose?: number
};

type ToastContextType = {
  showToast: (options: ToastOptions) => void
  closeToast: () => void
};

const ToasterContext = createContext<ToastContextType | undefined>(undefined);

function ToasterProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState<VariantProps<typeof Toast>["variant"]>("default");
  const [autoClose, setAutoClose] = useState<number | undefined>(3000);
  const [toastId, setToastId] = useState<string>("");

  const [pendingToast, setPendingToast] = useState<ToastOptions | null>(null);

  const showToast = useCallback((options: ToastOptions) => {
    const id = options.id || `${Date.now()}-${Math.random()}`;
    if (open) {
      setPendingToast({ ...options, id });
      setOpen(false);
    }
    else {
      setMessage(options.message);
      setVariant(options.variant || "default");
      setAutoClose(options.autoClose ?? 3000);
      setToastId(id);
      setOpen(true);
    }
  }, [open]);

  const closeToast = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open && pendingToast) {
      setTimeout(() => {
        setMessage(pendingToast.message);
        setVariant(pendingToast.variant || "default");
        setAutoClose(pendingToast.autoClose ?? 3000);
        setToastId(pendingToast.id!);
        setOpen(true);
        setPendingToast(null);
      }, 200);
    }
  }, [open, pendingToast]);

  return createElement(
    ToasterContext.Provider,
    { value: { showToast, closeToast } },
    [
      children,
      createElement(Toast, {
        key: toastId,
        message,
        variant,
        open,
        autoClose,
        onClose: closeToast,
      }),
    ],
  );
}

type ToastProps = Readonly<{
  message: string
  variant?: VariantProps<typeof toastVariants>["variant"]
  open?: boolean
  autoClose?: number
  onClose?: () => void
}>;

function Toast({
  message,
  variant,
  open = true,
  autoClose,
  onClose,
}: ToastProps) {
  const [visible, setVisible] = useState(open);
  const [isClosing, setIsClosing] = useState(false);

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setIsClosing(false);

      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }

      if (autoClose && onClose) {
        closeTimeout.current = setTimeout(() => handleClose(), autoClose);
      }
    }
    else if (visible) {
      setTimeout(() => setIsClosing(true), 100);
      closeTimeout.current = setTimeout(() => setVisible(false), 200);
    }
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, autoClose, message]);

  const handleClose = () => {
    setTimeout(() => {
      setIsClosing(true);
    }, 100);

    closeTimeout.current = setTimeout(() => {
      setVisible(false);

      if (onClose) onClose();
    }, 200);
  };

  const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
    if (e.animationName === "toast-slide-down") {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <Portal>
      <div onAnimationEnd={handleAnimationEnd} className="adm:fixed adm:bottom-0 adm:left-0 adm:w-full adm:z-50 adm:pointer-events-none">
        <div
          className={cn(
            toastVariants({ variant }),
            "adm:w-full adm:pointer-events-auto",
            isClosing
              ? "adm:animate-toast-slide-down"
              : "adm:animate-toast-slide-up",
          )}
        >
          <div className="adm:flex-1 adm:text-center adm:text-sm">
            {message}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export {
  Toast,
  ToasterProvider,
  ToasterContext,
  type ToastOptions,
  type ToastContextType,
};
