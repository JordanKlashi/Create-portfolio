import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/home.jsx'
import Contact from './page/contact.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Create-portfolio' element={<Home />} />
        <Route path='/Create-portfolio/Contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
