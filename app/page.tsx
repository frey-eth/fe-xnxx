import Banner from "@/components/home/banner";
import Category from "@/components/home/category";
import ListManga from "@/components/home/list-manga";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4 pt-[100px]">
      <Banner />
      <Category />
      <ListManga />
    </main>
  );
}
