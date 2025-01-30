import Image from "next/image";

type PetOption = {
  label: string;
  icon: string;
};

interface PetOptionButtonProps {
  pet: PetOption;
  selectedPet: string;
  onClick: (pet: PetOption) => void;
}

const OptionButton: React.FC<PetOptionButtonProps> = ({
  pet,
  selectedPet,
  onClick,
}) => (
  <span
    className={`inline-flex items-center justify-center rounded-full border m-1 px-2.5 py-0.5 cursor-pointer ${
      selectedPet === pet.label
        ? "bg-[#1369D9] text-white"
        : "border-[#E0E8F2] text-[#121D2C]"
    }`}
    onClick={() => onClick(pet)}
  >
    {pet.icon && (
      <Image
        src={pet.icon}
        alt={pet.label}
        width={16}
        height={16}
        unoptimized
      />
    )}
    <p className="whitespace-nowrap text-sm p-[6px] capitalize">{pet.label}</p>
  </span>
);

export default OptionButton;
