import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
