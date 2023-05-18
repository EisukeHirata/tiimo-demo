import Image from "next/image";
import { IconButton } from "@/components/iconButton";

export const Sidebar = () => {
  return (
    <div>
      <aside
        id="default-sidebar"
        className=" absolute flex left-0 w-col-span-3
         max-w-full h-[100svh] bg-white"
        aria-label="Sidebar"
      >
        <div className="w-full h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2  font-medium text-lg">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex w-2/12  h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-2">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
