import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {

  return (
    // the entire app has the access to the shopping cart provider
    <ShoppingCartProvider>
      <Navbar />
      <div className='pl-2 pt-2 pb-2 bg-gray-100'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </ShoppingCartProvider>

  );
}

export default App;
