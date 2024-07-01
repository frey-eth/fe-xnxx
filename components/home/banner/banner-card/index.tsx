import { useRouter } from "next/navigation";
type BannerCardProps = {
  img_url: string;
};

const BannerCard = ({ img_url }: BannerCardProps) => {
  const router = useRouter();
  return (
    <div
        onClick={() => router.push("/jujutsu-kaisen")}
      className="border rounded-lg bg-black h-[300px] overflow-hidden relative"
    >
      <img src={img_url} alt="Slide 2" className="object-cover h-full" />
    </div>
  );
};

export default BannerCard;
