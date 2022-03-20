import Layout from '../../components/Layout';
import products from '../../products.json';
import { useGlobalContext } from '../../context';
const ProizvodPojedinacno = ({ product }) => {
  console.log(product);
  const { height } = useGlobalContext();
  return (
    <Layout>
      <div className={`wrapper w-full  bg-gray-200 py-20`}>
        <article className='flex xl:flex-row flex-col w-4/5 m-auto p-4 bg-transparent'>
          <div className='flex  items-center justify-center xl:w-[800px] xl:h-[800px] w-full h-full object-cover xl:p-4'>
            <img
              className='w-full h-full object-cover'
              src={product.image}
              alt={product.name}
            />
          </div>
          <div>
            <h1 className='text-3xl'>{product.name}</h1>
            <span className='text-2xl'>{product.price}</span>
            <div className='text-base'>
              <p>{product.detail}</p>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

//ubaciti kategorije psi, macke, ptice...
//strana kategorije izlistava sve proixvvode te kategorije
//sort opcija cena

export const getStaticProps = async (context) => {
  return {
    props: {
      product: products.find((p) => p.id.toString() === context.params.id),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: products.map((l) => {
      return {
        params: { id: l.id.toString() },
      };
    }),
    fallback: false,
  };
};
export default ProizvodPojedinacno;
