import Layout from '../components/Layout';
import Proizvod from '../components/Proizvod';
import { categoryData } from '../kategorijeData';
import products from '../products.json';
import { useGlobalContext } from '../context';
const Kategorija = ({ page }) => {
  const { height } = useGlobalContext();
  return (
    <Layout>
      <div className={`wrapper w-full  bg-gray-200 py-20`}>
        <h1 className='text-3xl  text-center'>{page[0].title}</h1>
        <section className='flex gap-6 w-5/6 m-auto flex-wrap'>
          {page.map((p) => (
            <Proizvod key={p.id} {...p} />
          ))}
        </section>
      </div>
    </Layout>
  );
};
//bolja opcija je da bude jedan zaseban json za proizvode
//a sto je za interfejs da bude odvojeno da se uprosti
export const getStaticProps = async (context) => {
  return {
    props: {
      page: products.filter((p) => p.link === context.params.url),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: products.map((l) => {
      return {
        params: { url: l.link },
      };
    }),
    fallback: false,
  };
};
export default Kategorija;
