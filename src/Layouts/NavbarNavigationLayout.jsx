import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/Navbar";

export const NavbarNavigationLayout = () => {
  return (
    <div className="w-10/12 mx-auto mt-6">
      <header>
        <NavBar></NavBar>
      </header>
      <main className="w-full py-12 mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};
