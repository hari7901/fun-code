import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { PricingSection } from "./components/sections/PricingSection";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </main>
    </div>
  );
}

export default App;
