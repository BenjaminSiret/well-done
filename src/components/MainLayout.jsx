import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MainMenu from "./MainMenu";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainMenu />
      <main className="w-full flex flex-col flex-grow items-center justify-center space-y-5 md:space-y-8 lg:space-y-11">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
