const Button2 = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center uppercase rounded-sm bg-blue-600 text-gray-50 px-2 py-1 tracking-wider text-base `}
    >
      {title}
    </button>
  );
};

export default Button2;
