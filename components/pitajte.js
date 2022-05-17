import Button from './Button';
import styles from '../styles/pitajte.module.scss';
import BottomLine from './BottomLine';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';

const Pitajte = () => {
  const router = useRouter();

  return (
    <div className={styles['pitajte']}>
      <h2>Поставите нам питање</h2>
      <BottomLine />
      <form
        method='POST'
        action='https://formsubmit.co/beograd.l@yandex.com'
        className={styles['form']}
      >
        <input type='hidden' value='table' name='_template' />
        <input type='hidden' name='_next' value='https://ask23.rs' />
        {/*<input
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
          ></textarea> */}
        <TextField label='Име' variant='outlined' name='ime' required />
        <TextField label='email' variant='outlined' name='email' required />

        <TextField
          id='filled-textarea'
          label='питање'
          multiline
          name='pitanje'
          rows={10}
          variant='outlined'
          required
        />
        <Button title='пошаљи' type='submit' />
      </form>
    </div>
  );
};

export default Pitajte;
