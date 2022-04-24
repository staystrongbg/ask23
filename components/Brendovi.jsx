import BottomLine from './BottomLine';
import Divider from './Divider';
import Placeholder from './Placeholder';
import { createArr, H1 } from './utils';
const Brendovi = () => {
  return (
    <section className='brands relative mx-auto mb-40 w-full flex flex-col items-center justify-center h-screen '>
      <div className='absolute top-0 right-0 left-0 bottom-0 bg-gray-700/20'></div>
      <H1 className='text-gray-50 drop-shadow-lg '>
        код нас можете наћи производе реномираних произвођача
      </H1>
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
