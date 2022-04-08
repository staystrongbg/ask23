const Button2 = ({ onClick, title, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center uppercase rounded-sm bg-blue-600 text-gray-50 px-2 py-1 tracking-wider sm:text-base text-sm ${className} `}
    >
      {title}
    </button>
  );
};

export default Button2;
