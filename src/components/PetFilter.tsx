import React, { useState } from "react";
import { Popover, PopoverTrigger } from "@/components/UI/Popover";
import { Button } from "@/components/UI/Button";
import FilterDropdown from "./UI/FilterDropdown";

type PetOption = {
  label: string;
  icon: string;
};

interface PetFilterProps {
  selectedPet: string;
  setSelectedPet: React.Dispatch<React.SetStateAction<string>>;
  getCustomers: () => void;
}

const PetFilter: React.FC<PetFilterProps> = ({
  selectedPet,
  setSelectedPet,
  getCustomers,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePetClick = (pet: PetOption) => {
    setSelectedPet(pet.label);
  };

  const handleReset = () => {
    getCustomers();
    setSelectedPet("any animal");
    setIsOpen(false);
  };

  const handleApplyFilters = () => {
    getCustomers();
    setIsOpen(false);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center justify-between px-4 py-2 border rounded-lg w-40 gap-0 capitalize"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {`${selectedPet}s`}
          <svg className="w-3 h-6" viewBox="0 0 14 8" fill="none">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
        </Button>
      </PopoverTrigger>
      {isOpen && (
        <FilterDropdown
          selectedPet={selectedPet}
          onPetSelect={handlePetClick}
          onReset={handleReset}
          onApply={handleApplyFilters}
        />
      )}
    </Popover>
  );
};

export default PetFilter;
