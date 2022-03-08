import GoogleMapReact from 'google-map-react';
import Map from './Map';
const Footer = () => {
  const location = {
    address: 'Dr. Drage Ljočić 3, Beograd',
    lat: 44.80241,
    lng: 20.5242,
  };

  return (
    <footer className='bg-blue-900/80 w-full items-center justify-center flex text-red-50 px-10 py-5'>
      <Map location={location} zoomLevel={17} />
    </footer>
  );
};

export default Footer;

// AIzaSyBvCnmNbXmNc42-kRm-nU6ZEy_AiQUh16U
