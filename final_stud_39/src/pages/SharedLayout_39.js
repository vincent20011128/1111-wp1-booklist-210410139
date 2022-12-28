import { Outlet } from 'react-router-dom';
import Navbar_39 from '../components/Navbar_39';

const SharedLayout_39 = () => {
  return (
    <>
      <Navbar_39 />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout_39;
