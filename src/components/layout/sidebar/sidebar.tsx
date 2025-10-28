/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useRef, type ComponentProps, type PropsWithChildren, type RefObject } from "react";
import { Portal } from "@radix-ui/react-portal";
import { cn } from "@src/lib/utils";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@src/components/ui/sheet/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Slot } from "@radix-ui/react-slot";
import { useMediaQuery } from "@uidotdev/usehooks";

type SidebarContextType = {
  sidebarContentRef: RefObject<HTMLDivElement | null>
};

const SidebarContext = createContext({} as SidebarContextType);

function Sidebar({ children }: PropsWithChildren) {
  const sidebarContentRef = useRef<HTMLDivElement>(null);

  return (
    <SidebarContext.Provider value={{ sidebarContentRef }}>
      <nav data-slot="sidebar">{children}</nav>;
    </SidebarContext.Provider>
  );
}

function SidebarContent({ className, children, ...props }: PropsWithChildren<ComponentProps<"div">>) {
  const { sidebarContentRef } = useSidebarContext();

  const isXl = useMediaQuery("(min-width: 1280px)");

  return (
    <Portal>
      <div
        ref={sidebarContentRef}
        data-slot="sidebar-content"
        className={cn(className, [
          "adm:fixed adm:bg-sidebar-primary adm:text-sidebar-primary-foreground adm:xl:flex adm:xl:flex-col",
          "adm:left-0 adm:top-0 adm:right-0",
          "adm:xl:left-0 adm:xl:top-0 adm:xl:bottom-0 adm:xl:w-3xs adm:xl:h-auto",
        ])}
        {...props}
      >
        {isXl && children}
        {!isXl && (
          <Sheet>
            <div className="adm:flex adm:items-center adm:gap-4 adm:p-4">
              <div data-slot="sidebar-topbar"></div>
              <SheetTrigger asChild>
                <MenuIcon className="adm:ml-auto adm:cursor-pointer" />
              </SheetTrigger>
            </div>
            <SheetContent showCloseButton={false} className="adm:bg-sidebar-primary adm:text-sidebar-primary-foreground adm:border-sidebar-primary adm:rounded-none">
              <VisuallyHidden>
                <SheetHeader>
                  <SheetTitle>Sidebar</SheetTitle>
                  <SheetDescription>
                    Sidebar
                  </SheetDescription>
                </SheetHeader>
              </VisuallyHidden>
              {children}
            </SheetContent>
          </Sheet>
        )}
      </div>
    </Portal>
  );
}

function SidebarInset({ className, children, ...props }: PropsWithChildren<ComponentProps<"div">>) {
  const { sidebarContentRef } = useSidebarContext();

  return (
    <main
      data-slot="sidebar-inset"
      className={cn(className, "adm:xl:ml-[256px] adm:xl:mt-auto")}
      style={{ marginTop: sidebarContentRef.current?.clientHeight }}
      {...props}
    >
      {children}
    </main>
  );
}

function SidebarHeader({ className, children, ...props }: PropsWithChildren<ComponentProps<"header">>) {
  return (
    <header
      data-slot="sidebar-header"
      className={cn(className, "adm:flex adm:flex-col adm:mt-12")}
      {...props}
    >
      {children}
    </header>
  );
}

function SidebarFooter({ className, children, ...props }: PropsWithChildren<ComponentProps<"footer">>) {
  return (
    <footer
      data-slot="sidebar-footer"
      className={cn(className, "adm:mt-auto adm:mb-12 adm:flex adm:flex-col")}
      {...props}
    >
      {children}
    </footer>
  );
}

function SidebarMenu({ className, children, ...props }: PropsWithChildren<ComponentProps<"div">>) {
  return (
    <div
      data-slot="sidebar-menu"
      className={cn(className, "adm:flex adm:flex-col adm:gap-4 adm:overflow-y-auto adm:my-12  adm:py-1")}
      {...props}
    >
      {children}
    </div>
  );
}

function SidebarMenuItem({ asChild, className, ...props }: ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp data-slot="sidebar-menu-item" className={cn(className, "adm:mx-4 adm:flex adm:gap-4 adm:items-center adm:p-4 adm:hover:bg-white/10 adm:rounded-xl adm:transition-all")} {...props} />
  );
}

function useSidebarContext() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }

  return context;
}

export {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  useSidebarContext,
};
