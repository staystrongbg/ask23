import GoogleMapReact from 'google-map-react';
import styles from '../styles/map.module.scss';
import LocationPin from './LocationPin';

const Map = ({ location, zoomLevel }) => {
  return (
    <div className={styles.map}>
      {/* <h2 className={styles['map-h2']}>Посетите нас на</h2> */}

      <div className={styles['google-map']}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCK5hFMuzlfZwdwQuyJAn4E_J8gz5ZSrA8' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
