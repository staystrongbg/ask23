import Image from 'next/image';
import { H1, P } from './utils';
const Hero = () => {
  return (
    <section className='py-20 mb-20 border-dashed border-b-2 border-gray-300'>
      <H1 className='text-center'>Ко је АСК23?</H1>
      <div className='lg:w-5/6 m-auto w-full p-2 lg:flex-row flex flex-col items-center  justify-center gap-4 lg:gap-8 '>
        <P className='border-none xl:w-1/2 w-full'>
          Из велике љубави према животињама родила се жеља да се отвори
          продавница за куће љубимце која ће у понуди имати све што наше љубимце
          чини ситим и срећним.
        </P>
        <div className='rounded-full pt-1 pb-4 bg-gradient-to-r from-orange-800 to-orange-600 p-4 '>
          <Image
            placeholder='blur'
            blurDataURL='/radnja-spolja.jpg'
            src='/radnja-spolja.jpg'
            width='500px'
            height='500px'
            unoptimized={true}
            loading='eager'
            className='rounded-full'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
