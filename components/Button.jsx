import styles from '../styles/button.module.scss';
const Button = ({ title, type = 'button', className }) => {
  return (
    <button type={type} className={`${styles.button} ${className}`}>
      <span>{title} </span>
    </button>
  );
};

export default Button;
