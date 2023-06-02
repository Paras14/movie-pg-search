import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import SearchPage from './component/SearchPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
      <Routes>
        <Route path='/home' Component={Home} exact/>
        <Route path='/search-page' Component={SearchPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
