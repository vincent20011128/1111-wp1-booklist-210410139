import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_39 from './pages/HomePage_39';
import ErrorPage_39 from './pages/ErrorPage_39';
import SharedLayout_39 from './pages/SharedLayout_39';

import F1Page_39 from './pages/midterm_39/F1Page_39';
import F2Page_39 from './pages/midterm_39/F2Page_39';
import P1Page_39 from './pages/midterm_39/P1Page_39';
import P2Page_39 from './pages/midterm_39/P2Page_39';
import P3Page_39 from './pages/midterm_39/P3Page_39';
import P4Page_39 from './pages/midterm_39/P4Page_39';
import P5Page_39 from './pages/midterm_39/P5Page_39';
import P6Page_39 from './pages/midterm_39/P6Page_39';

import BlogsPage_39 from './pages/BlogsPage_39';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_39 />}>
          <Route index element={<HomePage_39 />} />
          <Route path='blogs_39' element={<BlogsPage_39 />} />
          <Route path='F1_39' element={<F1Page_39 />} />
          <Route path='F2_39' element={<F2Page_39 />} />
          <Route path='p1_39' element={<P1Page_39 />} />
          <Route path='p2_39' element={<P2Page_39 />} />
          <Route path='p3_39' element={<P3Page_39 />} />
          <Route path='p4_39' element={<P4Page_39 />} />
          <Route path='p5_39' element={<P5Page_39 />} />
          <Route path='p6_39' element={<P6Page_39 />} />
          <Route path='*' element={<ErrorPage_39 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
