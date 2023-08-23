import DropDown from "./DropDown";
import logo from "../../Images/logo.png";

export default function Header() {
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
    <div className="pl-6 pr-6 p-3 md:p-6 flex justify-between bg-[#0a192f] shadow-xl shadow-[#112240] border-b-2 border-[#01d293] fixed w-full z-10 mb-12">
      <div>
        <img className="w-10 md:w-16 absolute z-0" src={logo} alt="" />
      </div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex flex-row gap-12 text-xl justify-end text-[#c5c6c7]">
          {headers.map((filter) => (
            <a
              href={`#${filter}`}
              className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1] flex items-center transition duration-500"
            >
              {filter}
            </a>
          ))}
          <button
            className="hover:bg-[#112240] transition duration-300 flex justify-center w-36 border-2 border-[#01d293] text-[#01d293] p-2 rounded-lg"
            onClick={onButtonClick}
          >
            Resume
          </button>
        </div>
      </div>
      {/* Mobile view */}
      <div className="md:hidden flex flex-row-reverse gap-24 justify-start">
        <DropDown />
      </div>
    </div>
  );
}
