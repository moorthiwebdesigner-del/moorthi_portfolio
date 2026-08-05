import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    show && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          fixed
          bottom-24
          right-6
          w-14
          h-14
          rounded-full
          bg-blue-600
          text-white
          shadow-xl
          hover:bg-blue-700
          hover:scale-110
          transition
          duration-300
          cursor-pointer
        "
      >
        <FaArrowUp className="mx-auto" />
      </button>
    )
  );
}

export default ScrollTop;