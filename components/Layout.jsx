import Topnav from './Topnav';
import Footer from './Footer';
import Topbar from './Topbar';
import Breadcrumbs from './Breadcrumbs';
const Layout = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <Topbar />
      <Topnav />
      <Breadcrumbs />
      <div className='m-auto w-full  min-h-screen'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
