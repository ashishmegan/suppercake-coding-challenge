"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { fetchAPI } from "@/lib/api";
import PetFilter from "@/components/PetFilter";
import Skeleton from "react-loading-skeleton";
import List from "@/components/List";
import NotFound from "@/components/NotFound";
import Error from "@/components/Error";

interface Pet {
  id: string;
  name: string;
  species: string;
}

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  pets: Pet[];
}

const Home = () => {
  const [customersList, setCustomersList] = useState<Customer[]>([]);
  const [searchText, setSearchText] = useState("");
  const [species, setSpecies] = useState("any animal");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getCustomers = async () => {
    setLoading(true);
    setError("");

    try {
      const queryParams = new URLSearchParams();
      if (searchText) queryParams.append("searchText", searchText);
      if (species !== "any animal") queryParams.append("species", species);

      const { customers } = await fetchAPI<Customer[]>(
        `/api/customers?${queryParams.toString()}`
      );
      setCustomersList(customers);
    } catch {
      setError("Failed to load customers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="container mx-auto p-8 pb-20 gap-16 lg:p-20">
      <div className="px-6 py-10 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Customers and Pets</h2>
        <div className="flex space-x-3 items-center lg:w-[600px]">
          <SearchBar
            setSearchText={setSearchText}
            getCustomers={getCustomers}
          />
          <PetFilter
            selectedPet={species}
            setSelectedPet={setSpecies}
            getCustomers={getCustomers}
          />
        </div>
      </div>
      <div className="py-4">
        {loading &&
          [...Array(8)].map((_, idx) => (
            <Skeleton key={idx} height={100} className="my-1" />
          ))}
        {Array.isArray(customersList) && <List listData={customersList} />}
        {customersList?.length == 0 && <NotFound />}
        {error && <Error error={error} />}
      </div>
    </div>
  );
};

export default Home;
