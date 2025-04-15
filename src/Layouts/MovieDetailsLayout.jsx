import { NavBar } from "../Components/NavBar";

export const MovieDetailsLayout = () => {
  return (
    <div className="w-10/12 mx-auto mt-6">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <section className="flex items-center justify-center w-10/12 mx-auto"></section>
      </main>
    </div>
  );
};
