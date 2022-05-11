import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home";
import { OurTopDishes } from "./Components/OurTopDishes";
import { OurMenu } from "./Components/OurMenu";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      once: false,
      offset: 100,
      duration: 1000,
    });
  });

  return (
    <div className="App">
      <Home />
      <OurTopDishes />

      <OurMenu />
    </div>
  );
}

export default App;
