import Aos from "aos";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Numbers from "./components/Numbers/Numbers";
import PastTransactions from "./components/PastTransactions/PastTransactions";
import Price from "./components/Price/Price";
import Questions from "./components/Questions/Questions";

function App() {
  Aos.init({
    duration: 1000, // Время анимации
    easing: "ease-in-out", // Тип анимации
    once: true, // Анимация сработает только один раз
  });
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Numbers />
        <PastTransactions />
        <About />
        <Price />
        <Questions />
      </main>
      <Footer />
    </>
  );
}

export default App;
