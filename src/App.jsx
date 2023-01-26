import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Add from './components/Add';
import Details from './components/Details';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="add" element={<Add />} />
          <Route path="/recipes/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
    

export default App;