import Button from './Button';
import styles from '../styles/pitajte.module.scss';
const Pitajte = () => {
  return (
    <div className={styles['pitajte']}>
      <h2>Имате питање за нас?</h2>
      <div className='border-b-2 m-auto border-red-500 w-60 '></div>
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
