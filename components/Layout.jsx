import Topnav from './Topnav';
import Footer from './Footer';
import Topbar from './Topbar';
import { useGlobalContext } from '../context';
const Layout = ({ children }) => {
  const { height } = useGlobalContext();
  return (
    <div className='flex flex-col'>
      <Topnav />
      <div className='m-auto w-full  min-h-screen'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
