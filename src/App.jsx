import "./App.css";
import NavBar from "/src/components/NavBar/NavBar";
import TopBody from "/src/components/TopBody/TopBody";
import MidSection from "/src/components/MidSection/MidSection";
import Footer from "/src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <TopBody />
      <MidSection />
      <Footer />
    </div>
  );
}

export default App;
