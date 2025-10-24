import { ThemableSection } from "@app/contexts/themable-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@src/components/ui/tabs/tabs";
import { cn } from "@src/lib/utils";
import type { ComponentProps } from "react";

export type TabsSectionProps = Readonly<ComponentProps<typeof ThemableSection>>;

export function TabsSection({ className, ...props }: Omit<TabsSectionProps, "title">) {
  return (
    <ThemableSection title="Tabs" className={cn(className)} {...props}>
      <div className="adm:space-y-4">
        <div>
          <h3 className="adm:font-medium adm:mb-2">Default</h3>
          <div className="adm:flex adm:gap-4">
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Make changes to your account here.</TabsContent>
              <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </ThemableSection>
  );
}
