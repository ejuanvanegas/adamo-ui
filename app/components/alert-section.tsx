import { ThemableSection } from "@app/contexts/themable-section";
import { Alert, AlertDescription, AlertTitle } from "@src/components/ui/alert";

import { cn } from "@src/lib/utils";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import type { ComponentProps } from "react";

export type AlertSectionProps = Readonly<ComponentProps<typeof ThemableSection>>;

export function AlertSection({ className, ...props }: Omit<AlertSectionProps, "title">) {
  return (
    <ThemableSection title="Alert" className={cn(className)} {...props}>
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
      <Alert>
        <PopcornIcon />
        <AlertTitle>
          This Alert has a title and an icon. No description.
        </AlertTitle>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul className="adm:list-inside adm:list-disc adm:text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
    </ThemableSection>
  );
}
