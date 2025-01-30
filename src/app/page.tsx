"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="container mx-auto p-8 pb-20 gap-16 lg:p-20">
      <div className="px-6 py-10 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Customers and Pets</h2>
        <div className="flex space-x-3 items-center lg:w-[600px]">
          <SearchBar setSearchText={setSearchText} />
        </div>
      </div>
    </div>
  );
};

export default Home;
