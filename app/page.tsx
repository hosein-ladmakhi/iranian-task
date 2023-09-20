import HomeHeader from '@/components/home/HomeHeader';
import HomeTabBar from '@/components/home/HomeTabBar';
import { fetchUsers } from '@/services/users';

export default async function HomePage() {
  console.log('data', await fetchUsers());
  return (
    <>
      <HomeHeader />
      <HomeTabBar />
    </>
  );
}
