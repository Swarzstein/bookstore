import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import { activeBook, activeCategory } from './modules/activeNav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <h1>Bookstore CSM</h1>
            <ul>
              <li><Link to="/" id="book-nav" className="nav-link active-link" onClick={activeBook}>BOOKS</Link></li>
              <li><Link to="categories" id="category-nav" className="nav-link" onClick={activeCategory}>CATEGORIES</Link></li>
            </ul>
          </nav>
          <button className="icon-button" type="button">
            <span className="material-icons primary-color">person</span>
          </button>
        </header>
        <Routes>
          <Route index element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
