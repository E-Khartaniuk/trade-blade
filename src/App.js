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
