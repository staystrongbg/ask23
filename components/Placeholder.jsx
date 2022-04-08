import { H1 } from '../components/utils';

const Placeholder = ({ item = null, width = 'w-full' }) => {
  console.log(width);
  return (
    <span
      className={` hover:opacity-60 cursor-pointer border border-gray-400 ${width} grid items-center bg-indigo-100 aspect-square `}
    >
      <a href='#'>
        <H1 className='text-center'>brend {item}</H1>
      </a>
    </span>
  );
};

export default Placeholder;
