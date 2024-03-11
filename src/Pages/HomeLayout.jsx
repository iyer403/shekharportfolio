import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
