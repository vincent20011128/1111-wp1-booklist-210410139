import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_39 from './pages/HomePage_39';
import AboutPage_39 from './pages/AboutPage_39';
import ProductPage_39 from './pages/ProductsPage_39';
import ErrorPage_39 from './pages/ErrorPage_39';
import SharedLayout_39 from './pages/SharedLayout_39';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout_39/>}>
        <Route index element={<HomePage_39/>} />
        <Route path='about' element={<AboutPage_39/>}/>
        <Route path='products' element={<ProductPage_39/>}/>
        <Route path='*' element={<ErrorPage_39/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
