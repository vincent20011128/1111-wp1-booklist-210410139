import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_39 from './pages/HomePage_39';
import ErrorPage_39 from './pages/ErrorPage_39';
import SharedLayout_39 from './pages/SharedLayout_39';

import P1Page_39 from './pages/P1Page_39';
import P2Page_39 from './pages/P2Page_39';
import P3Page_39 from './pages/P3Page_39';
import P4Page_39 from './pages/P4Page_39';
import P5Page_39 from './pages/P5Page_39';
import P6Page_39 from './pages/P6Page_39';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_39 />}>
          <Route index element={<HomePage_39 />} />
          <Route path='P1_39' element={<P1Page_39/>}/>
          <Route path='P2_39' element={<P2Page_39/>}/>
          <Route path='P3_39' element={<P3Page_39/>}/>
          <Route path='P4_39' element={<P4Page_39/>}/>
          <Route path='P5_39' element={<P5Page_39/>}/>
          <Route path='P6_39' element={<P6Page_39/>}/>
        </Route>
        <Route path='*' element={<ErrorPage_39 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
