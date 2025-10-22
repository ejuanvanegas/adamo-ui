import { Colors } from "@src/components/colors";
import { HowToUseTokens } from "@src/components/how-to-use-tokens";

export default function App() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <HowToUseTokens className="mb-12" />
      <Colors />
    </main>
  );
}
