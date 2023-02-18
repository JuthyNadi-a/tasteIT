import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Add from './components/AddRecipe';
import Details from './components/Details';
import Notfound from './components/Notfound';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/add" element={<Add />} />
          <Route path="/recipes/:id" element={<Details />} />
          <Route  path='*' element= {<Notfound/>}>Not found</Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
    

export default App;