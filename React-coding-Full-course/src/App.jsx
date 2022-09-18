import './App.css'
import Home from './Home';
import Create from './Create';
import Navbar from './Navbar';
import Blogdetails from './Blogdetails';
// importing react-router-dom v6
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <div className='app'>
    <Navbar />
    <div className="content">
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/create' element={<Create />} />
    <Route path='/blogs/:id' element={<Blogdetails />} />
    </Routes>
    </div>

    </div>
    </Router>
    </>
  )
}

export default App
