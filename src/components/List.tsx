import { Avatar } from "@radix-ui/themes";
import React from "react";

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

// Define props type
interface ListProps {
  listData: Customer[];
}

const List: React.FC<ListProps> = ({ listData }) => {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {listData.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <Avatar src={person.name} fallback={person.name[0]} />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold text-gray-900">
                {person.name}
              </p>
              <p className="mt-1 truncate text-xs text-gray-500">
                {person.email}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Phone: {person.phone}
              </p>
            </div>
          </div>

          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <p className="text-sm text-gray-900">Pets</p>
            {person.pets.length > 0 ? (
              <ul>
                {person.pets.map((pet) => (
                  <li key={pet.id} className="text-xs text-gray-500">
                    {pet.name} ({pet.species})
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-gray-500">No pets</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
