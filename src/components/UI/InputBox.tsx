import React from "react";

type SearchInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
};

const InputBox: React.FC<SearchInputProps> = ({
  onChange,
  placeholder,
  type,
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:border-[#327AD9] focus:shadow-[0px_0px_0px_4px_#2981F440] outline-none"
    />
  );
};

export default InputBox;
