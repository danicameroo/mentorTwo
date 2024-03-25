import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Routes/Home/Home';
import Navbar from './Routes/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
