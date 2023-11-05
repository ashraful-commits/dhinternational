import React from "react";

const FormInput = ({
  name,
  value,
  type,
  styles,
  placeholder,
  handleInputChange = { handleInputChange },
  label,
}) => {
  return (
    <div className="flex flex-col gap-2 my-2">
      <label className="text-[16px] text-[]  font-[500]" htmlFor="">
        {label}
      </label>
      <input
        className={`h-[32px] placeholder:text-[12px] px-2 rounded-sm border-[1px] focus:outline-none border-white bg-blue-300 placeholder:text-white focus:border-blue-500  ${styles}`}
        name={name}
        type={type}
        onChange={handleInputChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
