import Button from './Button';
import styles from '../styles/pitajte.module.scss';
import BottomLine from './BottomLine';
const Pitajte = () => {
  return (
    <div className={styles['pitajte']}>
      <h2>Имате питање за нас?</h2>
      <BottomLine />
      <form
        method='POST'
        action='https://formsubmit.co/beograd.l@yandex.com'
        className={styles['form']}
      >
        <input
          id={styles['ime']}
          type='text'
          name='name'
          placeholder='Име*'
          required
        />
        <input
          id={styles['email']}
          type='email'
          name='email'
          placeholder='Имејл*'
          required
        />
        <textarea
          name={styles['pitanje']}
          id={styles['pitanje']}
          placeholder='Питање*'
          required
        ></textarea>
        <Button title='пошаљи' type='submit' />
      </form>
    </div>
  );
};

export default Pitajte;
