import MainPage from "./components/MainPage";
import Search from "./components/Search";

export default function Home() {
  return (
    <div className="max-w-7xl mb-7 mx-auto">
      <Search />
      <MainPage />
    </div>
  );
}
