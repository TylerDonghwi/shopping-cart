import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <div className='ml-2 mt-2 bg-gray-200'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui quibusdam vitae! Repellendus neque quis veritatis laborum nisi. Quisquam nulla sapiente modi vero iure, reprehenderit soluta iusto deleniti corrupti velit?</p>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
