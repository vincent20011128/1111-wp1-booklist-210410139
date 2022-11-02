import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_39 from './pages/HomePage_39';
import AboutPage_39 from './pages/AboutPage_39';
import ProductsPage_39 from './pages/ProductsPage_39';
import ErrorPage_39 from './pages/ErrorPage_39';
import SharedLayout_39 from './pages/SharedLayout_39';
import SharedProductLayout_39 from './pages/SharedProductLayout_39';
import SingleProductPage_39 from './pages/SingleProductPage_39';
import BooklistPage_39 from './pages/BooklistPage_39';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout_39/>}>
        <Route index element={<HomePage_39/>} />
        <Route path='about' element={<AboutPage_39/>}/>
        <Route path='products' element={<SharedProductLayout_39/>}>
          <Route index element={<ProductsPage_39/>}/>
          <Route path=":productId" element={<SingleProductPage_39/>} />
        </Route>
        <Route path="booklist" element={<BooklistPage_39/>}/>
        <Route path='*' element={<ErrorPage_39/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
