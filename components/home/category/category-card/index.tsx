import Link from "next/link";

type CategoryCardProps = {
  title: string;
  year?: number;
  description?: string;
  image: string;
  _id?: string;
};

const CategoryCard = ({
  title,
  image,
  description,
  _id,
}: CategoryCardProps) => {
  return (
    <Link
      href={`/${_id}`}
      className="bg-white mx-1 border-2 border-black roudned-lg overflow-hidden sm:h-[360px] h-[280px] flex flex-col justify-between"
    >
      <img src={image} className="object-cover sm:h-[220px] h-[160px]" />

      <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-row justify-between w-full items-start">
          <p className="font-bold text-sm max-sm:text-[12px] whitespace-nowrap overflow-hidden text-ellipsis ">
            {title}
          </p>
        </div>
        <p className="text-xs text-gray-500 box-content overflow-hidden text-ellipsis break-words sm:line-clamp-3 line-clamp-2">
          {description}
        </p>
      </div>
      <div className="flex flex-row justify-end gap-1">
        <button className="px-2 py-1 bg-black text-white font-bold">
          Read
        </button>
      </div>
    </Link>
  );
};

export default CategoryCard;
