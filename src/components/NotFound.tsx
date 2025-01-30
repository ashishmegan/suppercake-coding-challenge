import Image from "next/image";

interface NotFoundProps {
  customStyle?: React.CSSProperties;
}

const NotFound: React.FC<NotFoundProps> = ({ customStyle }) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-[45vh]"
      style={customStyle}
    >
      <Image
        src="/search-file.gif"
        className="ml-4 mb-2"
        width={110}
        height={110}
        alt="not_found"
      />
      <h3 className="text-xl font-semibold">Data Not Found</h3>
    </div>
  );
};

export default NotFound;
