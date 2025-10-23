import { Colors } from "@app/components/colors";
import { HowToUseTokens } from "@app/components/how-to-use-tokens";
// import { Button } from "@src/components/ui/button/button";

export default function App() {
  return (
    <main className="adm:max-w-7xl adm:mx-auto adm:p-6">
      <HowToUseTokens className="adm:mb-12" />
      <Colors />
      {/* <Button>Click me</Button> */}
    </main>
  );
}
