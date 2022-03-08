import Layout from '../components/Layout';
import { useGlobalContext } from '../context';
const Akcije = () => {
  const { products } = useGlobalContext();
  //ne radi dobro search na /akcije
  //treba filtrirati

  return (
    <Layout>
      <section className='  px-5 py-10 bg-gray-100'>
        <div className='flex flex-col items-center justify-center w-5/6 m-auto mt-12 mb-12'>
          <h1 className='text-3xl uppercase'>
            сви производи тренутно на акцији
          </h1>
          <p className='w-3/4 text-center text-base border-b py-10 border-dashed border-gray-500'>
            Свака животиња има своје потребе, навике али и карактер на основу
            чега пажљиво правимо понуду производа за наше купце. Све што је
            потребно Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у.
            Приуштите им омиљену храну, опрему или играчке по најповољнијим
            акцијским ценама.
          </p>
          <div className='flex flex-wrap m-auto gap-5 py-10 justify-center w-5/6'>
            {products
              .filter((p) => p.akcija)
              .map((product, idx) => (
                <div
                  key={idx}
                  className='w-[300px] h-[450px] bg-gray-100 shadow-md hover:shadow-xl rounded-md  transition-all   '
                >
                  <div className='w-full h-1/2'>
                    <img
                      className='product-image  rounded-t-md object-cover h-full w-full'
                      src={product.image}
                      alt=''
                    />
                  </div>
                  <div className='px-4 mt-2 flex flex-col justify-start items-start gap-2'>
                    <h2 className='price bg-purple-700 inline p-1 text-gray-50 rounded-md text-2xl'>
                      {product.price * (idx + 10)},00
                    </h2>
                    <h3 className='title text-xl '>{product.name}</h3>
                    <p className='details'>{product.detail}</p>
                    {/* <Button title='više' /> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Akcije;
