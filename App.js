import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bookstore</h1>
        <nav>
          <ul>
            <li>BOOKS</li>
            <li>CATERORIES</li>
          </ul>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route index element={<Books/>}/>
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
