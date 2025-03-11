import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Numbers from "./components/Numbers/Numbers";
import PastTransactions from "./components/PastTransactions/PastTransactions";
import Price from "./components/Price/Price";

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
      </main>
      {/* <footer>
        <p>© 2025 Назва компанії</p>
      </footer> */}
    </>
  );
}

export default App;
