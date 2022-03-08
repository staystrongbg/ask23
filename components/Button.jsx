import styles from '../styles/button.module.scss';
const Button = ({ title }) => {
  return (
    <button className={styles.button}>
      <span>{title} </span>
    </button>
  );
};

export default Button;
