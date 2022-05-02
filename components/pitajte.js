import Button from './Button';
import styles from '../styles/pitajte.module.scss';
import BottomLine from './BottomLine';
import { useRouter } from 'next/router';
const Pitajte = () => {
  const router = useRouter();
  function redirect() {
    router.replace('/');
  }
  return (
    <div className={styles['pitajte']}>
      <h2>Имате питање за нас?</h2>
      <BottomLine />
      <form
        method='POST'
        action='https://formsubmit.co/staystrongbg@gmail.com'
        className={styles['form']}
      >
        <input type='hidden' value='table' name='_template' />
        <input type='hidden' name='_next' value='http://localhost:3000/' />
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
          name='pitanje'
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
