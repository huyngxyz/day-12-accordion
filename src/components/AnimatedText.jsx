import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Heading({ phrases }) {
  const container = useRef(null);

  const isInView = useInView(container, { once: true, margin: "0%" });

  const animation = {
    initial: { y: "200%" },

    enter: (i) => ({
      y: "0",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.0125 * i,
      },
    }),
  };

  return (
    <div ref={container}>
      <p className="text-[5vw]  tracking-tighter leading-[0.75em] p-10 max-w-5xl xl:max-w-7xl">
        {phrases.split(" ").map((word, index) => {
          return (
            <span key={index} className={`pb-2 lg:pb-4 px-2 ${index === 0 ? "indent-20" : ""} relative  overflow-hidden inline-flex`}>
              <motion.span
                variants={animation}
                initial='initial'
                custom={index}
                animate={isInView ? "enter" : ""}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </p>
    </div>
);

 
}
