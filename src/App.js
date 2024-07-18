import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/home.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Create-portfolio/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
