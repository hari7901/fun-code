import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { AuthGuard } from "./components/auth/RouteGuards";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { ExtendedFeaturesSection } from "./components/sections/ExtendedFeaturesSection";
import { LoginPage, SignupPage } from "./pages/auth/views";

// Home component for the landing page
const HomePage = () => (
  <>
    <Header />
    <main className="relative bg-gradient-to-br from-black via-gray-950 to-black">
      <HeroSection />
      <FeaturesSection />
      <ExtendedFeaturesSection />
    </main>
  </>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={
                <AuthGuard>
                  <LoginPage />
                </AuthGuard>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthGuard>
                  <SignupPage />
                </AuthGuard>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
