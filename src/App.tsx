import "./App.css";
import Header from "./Components/Common/Header";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Footer from "./Components/Common/Footer";

function App() {
  return (
    <div
      id="Home"
      className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen"
    >
      {/* Header */}
      <Header />

      <Home />
      <Blogs />
      <Projects />
      <Experience />

      {/* Footer */}
      <div className="w-full absolute inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
