import Image from "next/image";

interface Props {
  title: string;
  iconSrc: string;
  value: string;
}

const PriceInfoCard = ({ title, iconSrc, value }: Props) => {
  return (
    <div
      className={` min-w-[200px] flex flex-col gap-2 border-l-3 rounded-lg bg-gray-500 shadow-lg px-5 py-4`}
    >
      <p className="text-base ">{title}</p>

      <div className="flex gap-1">
        <Image src={iconSrc} alt={title} width={24} height={24} />

        <p className="text-2xl  ">{value}</p>
      </div>
    </div>
  );
};

export default PriceInfoCard;
