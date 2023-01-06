import { Link } from "raviger";
import { linkType } from "../../Types/DataType";
import DropDown from "./DropDown";

export default function Header(props: { filters: linkType[] }) {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="p-6 flex justify-between bg-[#0a192f] shadow border-b-2 border-[#01d293] fixed w-full z-10 mb-12">
      <div>
        <p
          style={{ height: "50px", width: "50px", fontSize: "25px" }}
          className="p-2 rounded-full bg-[#66fcf1] text-[#1f2833] flex justify-center items-center"
        >
          P
        </p>
      </div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex flex-row gap-12 text-xl justify-end text-[#c5c6c7]">
          {props.filters.map((filter) => (
            <Link
              href={filter.link}
              className={`${
                filter.active
                  ? "text-[#66fcf1] border-b-2 border-[#66fcf1]"
                  : "hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1]"
              } flex items-center transition duration-500`}
            >
              {filter.title}
            </Link>
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
        <DropDown filters={props.filters} />
      </div>
    </div>
  );
}
