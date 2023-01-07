export default function Footer() {
  return (
    <div className="bg-[#171a26] w-full p-3 flex flex-row justify-center gap-6">
      <div>
        <div className="flex justify-center items-center gap-6text-2xl">
          <div className="text-2xl flex md:gap-12 gap-4 pb-6">
            <a
              href="https://github.com/Pranshu1902/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa fa-github hover:text-[#64ffda] hover:scale-125 transition duration-200"></i>
            </a>
            <a
              href="https://instagram.com/coding_with_developers/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa fa-instagram hover:text-[#64ffda] hover:scale-125 transition duration-200"></i>
            </a>
            <a
              href="https://medium.com/@pranshu1902/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa fa-medium hover:text-[#64ffda] hover:scale-125 transition duration-200"></i>
            </a>
            <a
              href="https://twitter.com/pranshu1902/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa fa-twitter hover:text-[#64ffda] hover:scale-125 transition duration-200"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pranshu1902/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa fa-linkedin hover:text-[#64ffda] hover:scale-125 transition duration-200"></i>
            </a>
            {/* <a
              href="https://stackoverflow.com/users/15925350/pranshu-aggarwal"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa fa-stack-overflow hover:text-[#64ffda] hover:scale-125 transition duration-200"></i>
            </a> */}
          </div>
        </div>
        <div className="w-full flex justify-center items-center text-md">
          Made with&nbsp;<i className="fa fa-heart text-red-500"></i>&nbsp;by
          Pranshu
        </div>
        <div className="w-full flex justify-center items-center text-sm">
          &copy; Pranshu Aggarwal
        </div>
      </div>
    </div>
  );
}
