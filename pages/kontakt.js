import styles from '../styles/pitajte.module.scss';
import Layout from '../components/Layout';
import Pitajte from '../components/pitajte';
import Meta from '../components/Meta';
const Kontakt = () => {
  return (
    <Layout>
      <Meta title='Питајте' />

      <Pitajte />
    </Layout>
  );
};

export default Kontakt;
