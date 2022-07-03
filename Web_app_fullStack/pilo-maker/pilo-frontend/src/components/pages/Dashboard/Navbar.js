import { MenuAlt2Icon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/solid";
import { ThemeContext } from "context/themeContext";
import { useContext } from "react";
import AddModule from "./NavbarModule/AddModule";
import Notification from "./Notification";
import ProfileModal from "./ProfileModal";
function Navbar({ userNavigation, setSidebarOpen, classNames }) {
  const { theme, setTheme } = useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }

  function toggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }
  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white  shadow">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 px-4 flex justify-between items-center">
        <div className="">
          
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <AddModule />
          <Notification />
          <ProfileModal />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
