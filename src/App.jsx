import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import Particles from "./Particles";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="w-100 vh-100 position-relative overflow-hidden bg-black h-auto">
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

        <div className="position-relative d-flex justify-content-center align-items-center h-100">
          <HomePage />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
