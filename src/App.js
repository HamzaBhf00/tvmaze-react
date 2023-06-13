import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Routers/Home"
import Shows from './components/Routers/Shows'
import Info from "./components/Routers/Info"
import About from "./components/Routers/About"

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shows" element={<Shows />} />
          <Route path="/info/:showId" element={<Info />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
