import { H1 } from '../components/utils';

const Placeholder = ({ item, width = 240, aspect = 'square' }) => {
  return (
    <span
      className={` hover:opacity-60 cursor-pointer border border-gray-400 w-60 grid items-center bg-indigo-100 aspect-square `}
    >
      <a href='#'>
        <H1>brend {item}</H1>
      </a>
    </span>
  );
};

export default Placeholder;
