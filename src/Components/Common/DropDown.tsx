import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function DropDown() {
  const headers: String[] = ["Home", "Blogs", "Projects", "Experience"];

  const onButtonClick = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <Menu as="div" className="relative w-3/4 inline-block text-left">
      <div className="flex items-center h-full">
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-[#112240] shadow-lg px-6 py-2 bg-[#112240] text-sm font-bold text-[#66fcf1] hover:bg-[#112240] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-[#66fcf1]">
          <i className="fa-solid fa-bars"></i>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#112240] ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {headers.map((filterElement: String, index) => (
              <Menu.Item key={index}>
                <a
                  href={`#${filterElement}`}
                  className="bg-[#112240] hover:bg-[#163874] w-full flex justify-start hover:font-bold px-4 py-2 text-sm"
                >
                  {filterElement}
                </a>
              </Menu.Item>
            ))}
            <Menu.Item key={5}>
              <div className="p-1">
                <button
                  className="w-full transition duration-300 hover:bg-[#0a192f] flex border-2 border-[#01d293] md:px-8 text-[#01d293] p-2 rounded-md"
                  onClick={onButtonClick}
                >
                  Resume
                </button>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
