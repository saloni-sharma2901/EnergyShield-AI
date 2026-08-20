import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <AppRoutes />;
}

export default App;