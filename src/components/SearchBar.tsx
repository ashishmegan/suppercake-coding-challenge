import Image from "next/image";
import React, { ChangeEvent, KeyboardEvent } from "react";
import InputBox from "./UI/InputBox";

interface SearchBarProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchText }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="relative w-[300px]">
      <Image
        src="/search.svg"
        alt="search"
        width={16}
        height={16}
        unoptimized={true}
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
      />
      <InputBox
        type="text"
        onChange={handleChange}
        placeholder="Search by ID, name, email, or phone"
      />
    </div>
  );
};

export default SearchBar;
