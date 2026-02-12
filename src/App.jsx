import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from "./pages/About";
import Footer from './components/Footer';

function App() {
  return (
  <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>


     <Footer/>
    </div>
  );
}

export default App;