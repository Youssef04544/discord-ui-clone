const Input = ({ type, label }) => {
  return (
    <div className='flex flex-col w-5/6 mt-2 mb-3 text-[#b9bbbe]'>
      <label className='mb-1' htmlFor={label}>
        {label}
      </label>
      <input
        type={type}
        name={label}
        className='bg-[#2f3136] border-2 border-[#292b2f] p-1 rounded-sm outline-none focus:border-cyan-600'
        required
      />
    </div>
  );
};

export default Input;
