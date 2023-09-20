import HomeHeader from "@/components/home/HomeHeader";
import HomeTabBar from "@/components/home/HomeTabBar";
import { fetchUsers } from "@/services";

export const metadata = {
  title: "Home Page",
  description:
    "This is implementation of some task by nextjs,typescript,material ui",
  keywords: ["next", "react"],
};

export default async function HomePage() {
  const users = await fetchUsers();

  return (
    <>
      <HomeHeader />
      <HomeTabBar users={users.data} />
    </>
  );
}
