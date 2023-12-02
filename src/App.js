import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/footer" element={<Footer />} />
     </Routes>
    </Router>
  );
}
export default App;