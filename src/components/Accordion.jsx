import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const opacity = {
    initial: { opacity: 0 },

    enter: {
      opacity: 1,
    },
    transition: {

    }
  };

  useEffect(() => {
    contentRef.current.style.maxHeight = isOpen
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className=" border-t border-b border-gray-300 mb-10 max-w-4xl mx-auto my-20">
        <div
          className="flex items-center justify-between px-4 pb-4 pt-4 cursor-pointer group"
          onClick={toggleAccordion}
        >
          <div className="flex items-center gap-x-10 text-3xl font-semibold">
            <span className=" group-hover:translate-x-3 transition-transform ease-[cubic-bezier(0.19, 1, 0.22, 1)] duration-200">
              01.
            </span>
            <h2 className=" tracking-tight group-hover:translate-x-3 ease-[cubic-bezier(0.19, 1, 0.22, 1)] transition-transform duration-300 delay-50">
              This is an accordion
            </h2>
          </div>
          <svg
            className={`w-6 h-6 transition-transform ease-[cubic-bezier(0.19, 1, 0.22, 1)] duration-300 transform group-hover:-translate-x-3  delay-100 ${
              isOpen ? "rotate-0" : "rotate-45"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M6 18L18 6M6 6l12 12"}
            />
          </svg>
        </div>
        <div
          ref={contentRef}
          className={`pl-4 overflow-hidden transition-max-height duration-[400ms] ease-[cubic-bezier(0.16, 1, 0.3, 1)] max-h-0 tracking-normal leading-[150%] flex  gap-y-4 gap-x-5 text-lg  ${isOpen ? 'mb-4' : 'mb-0'}`}
          style={{ maxHeight: "0px" }}
        >
          <p>
            A relatively long content for this accordion explaining the topic of
            it. Wow. Who would have figured??? Anyways, I am surprised that
            you&apos;re still reading this. Okay seriously, stop reading.
          </p>
          <motion.div
            className="relative transition-opacity duration-150"
            variants={opacity}
            initial="initial"
            animate={isOpen ? "enter" : ""}
          >
            <motion.img
              width="auto"
              height="auto"
              loading="lazy"
              className="rounded-lg "
              src="https://images.unsplash.com/photo-1444124818704-4d89a495bbae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJ2JTIwb3V0ZG9vcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
