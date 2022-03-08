import styles from '../styles/map.module.scss';
import { GoLocation } from 'react-icons/go';
const LocationPin = ({ text }) => {
  return (
    <div className={styles.pin}>
      <GoLocation />
      <p className={styles['pin-text']}>{text}</p>
    </div>
  );
};
export default LocationPin;
