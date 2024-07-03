import ContributorCard from "@/components/community/contributor-card";

const list_contributors = [
  {
    name: "Pham Van Duong",
    role: "Developer",
    level: 2,
    avatar: "/images/avatar.png",
    facebook: "https://www.facebook.com/literally.dng",
    instagram: "https://www.instagram.com/literally_dng",
    messenger: "https://www.messenger.com/t/literally.dng",
  },
  {
    name: "Dang Phan",
    role: "Developer",
    level: 1,
    avatar:
      "https://cdn.icon-icons.com/icons2/2787/PNG/512/black_cat_icon_177458.png",
    facebook: "https://www.facebook.com/literally.dng",
    instagram: "https://www.instagram.com/literally_dng",
    messenger: "https://www.messenger.com/t/literally.dng",
  },
];

const Community = () => {
  return (
    <div className="w-full pt-20 md:pt-28 flex flex-col items-center gap-6">
      <div
        className="p-2 shadow-md border-[3px] border-black"
        style={{ clipPath: "polygon(15% 10%, 100% 0, 85% 90%, 0% 100%)" }}
      >
        <div
          className=" font-bold bg-black px-6 py-2 w-fit text-white italic"
          style={{ clipPath: "polygon(10% 0%, 100% 0, 90% 100%, 0% 100%)" }}
        >
          Contributor
        </div>
      </div>
      <div className="w-full flex justify-center gap-2 mx-auto items-center flex-wrap">
        {list_contributors.map((contributor, index) => (
          <ContributorCard key={index} {...contributor} />
        ))}
      </div>
    </div>
  );
};

export default Community;
