import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/Navbar";

export const AuthLayout = () => {
  return (
    <div className="w-10/12 mx-auto mt-6">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <section>
          <Outlet></Outlet>
        </section>
      </main>
    </div>
  );
};
