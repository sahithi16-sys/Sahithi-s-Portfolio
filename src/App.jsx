import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useContext } from "react";
import HomePage from "./components/HomePage";
import Particles from "./Particles";
import ThemeProvider, { ThemeContext } from "./contexts/ThemeContext";

function AppContent() {
  const { isDark } = useContext(ThemeContext);

  return (
<div
  className="w-100 vh-100 position-relative app-container"
  style={{
    backgroundColor: isDark ? "#000000" : "#ffffff",
    height: "100vh",
    overflowY: "auto"
  }}
>
      {isDark && (
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="w-100 h-100"
          />
        </div>
      )}

      <div className="position-relative d-flex justify-content-center align-items-center h-100">
        <HomePage />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
