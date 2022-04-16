import BottomLine from './BottomLine';
import Divider from './Divider';
import Placeholder from './Placeholder';
import { createArr, H1 } from './utils';
const Brendovi = () => {
  return (
    <section className='brands mx-auto mb-40 w-full flex flex-col items-center justify-center '>
      <H1>код нас можете наћи производе реномираних произвођача</H1>
      <BottomLine />
      <div className=' flex flex-wrap gap-4 items-center justify-center'>
        {createArr(8).map((item) => (
          <Placeholder key={item} item={item} width='w-[160px]' />
        ))}
      </div>
    </section>
  );
};

export default Brendovi;
