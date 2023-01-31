import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Overview from './pages/Overview';
import Edit from './pages/Edit';

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:category' element={<Overview />} />
          <Route path='/edit/:id' element={<Edit />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
