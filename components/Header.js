import Nav from "./Nav";
import Logo from "../components/svg/Logo";

const Header = () => {
  return (
    <header className="flex justify-between items-end p-8 bg-indigo-500 text-gray-100">
      <Logo />

      <Nav />
    </header>
  );
};

export default Header;
