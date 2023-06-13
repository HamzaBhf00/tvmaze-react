import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Routers/Home"
import Info from "./components/Routers/Info"
import About from "./components/Routers/About"

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
