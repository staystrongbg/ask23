import Topnav from './Topnav';
import Footer from './Footer';
import Topbar from './Topbar';
const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-w-screen items-center justify-between'>
      <Topnav />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
