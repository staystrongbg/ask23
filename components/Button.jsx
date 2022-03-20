import styles from '../styles/button.module.scss';
const Button = ({ title, type = 'button' }) => {
  return (
    <button type={type} className={styles.button}>
      <span>{title} </span>
    </button>
  );
};

export default Button;
