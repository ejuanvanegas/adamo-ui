import { ColorsSection } from "@app/components/colors-section";
import { HowToUseTokens } from "@app/components/how-to-use-tokens";
import { ButtonSection } from "@app/components/button-section";
import { BadgeSection } from "@app/components/badge-section";
import { CheckboxSection } from "@app/components/checkbox-section";
import { SwitchSection } from "@app/components/switch-section";
import { PaginationSection } from "@app/components/pagination-section";
import { TooltipSection } from "@app/components/tooltip-section";
import { CalendarSection } from "@app/components/calendar-section";
import { TabsSection } from "@app/components/tabs-section";
import { SelectSection } from "@app/components/select-section";
import { SliderSection } from "@app/components/slider-section";
import { DialogSection } from "@app/components/dialog-section";
import { AccordionSection } from "@app/components/accordion-section";
import { AlertSection } from "@app/components/alert-section";
import { AvatarSection } from "@app/components/avatar-section";

export default function App() {
  return (
    <main className="adm:max-w-7xl adm:mx-auto adm:p-6 adm:space-y-12">
      <HowToUseTokens />
      <ColorsSection />
      <ButtonSection />
      <BadgeSection />
      <AccordionSection />
      <AlertSection />
      <AvatarSection />
      <CheckboxSection />
      <SwitchSection />
      <PaginationSection />
      <TooltipSection />
      <CalendarSection />
      <TabsSection />
      <SelectSection />
      <SliderSection />
      <DialogSection />
    </main>
  );
}
