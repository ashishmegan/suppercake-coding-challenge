import React from "react";
import { PopoverContent } from "@/components/UI/Popover";
import { Button } from "@/components/UI/Button";
import OptionButton from "./OptionButton";

type PetOption = {
  label: string;
  icon: string;
};

const petOptions: readonly PetOption[] = [
  { label: "any animal", icon: "" },
  { label: "dog", icon: "/dog.svg" },
  { label: "cat", icon: "/cat.svg" },
  { label: "bird", icon: "/bird.svg" },
  { label: "hamster", icon: "/hamster.svg" },
  { label: "rat", icon: "/rat.svg" },
];

interface PetFilterDropdownProps {
  selectedPet: string;
  onPetSelect: (pet: PetOption) => void;
  onReset: () => void;
  onApply: () => void;
}

const FilterDropdown: React.FC<PetFilterDropdownProps> = ({
  selectedPet,
  onPetSelect,
  onReset,
  onApply,
}) => (
  <PopoverContent className="p-4 z-10 bg-white rounded-[15px] shadow-lg w-[334px]">
    <div className="gap-[4px]">
      {petOptions.map((pet) => (
        <OptionButton
          key={pet.label}
          pet={pet}
          selectedPet={selectedPet}
          onClick={onPetSelect}
        />
      ))}
    </div>
    <div className="w-full border-t border-gray-300 opacity-100 my-2" />
    <div className="flex justify-between mt-4 gap-4">
      <Button
        variant="outline"
        className="px-3 py-2 w-full rounded-[12px]"
        onClick={onReset}
      >
        Reset
      </Button>
      <Button
        className="w-full rounded-[12px] bg-[#1369D9] shadow-[0px_-5px_7px_0px_#1160C9_inset] p-4"
        onClick={onApply}
      >
        Apply Filters
      </Button>
    </div>
  </PopoverContent>
);

export default FilterDropdown;
