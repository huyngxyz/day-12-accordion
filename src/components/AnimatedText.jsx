import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Heading({ phrases, className }) {
  const container = useRef(null);
  

  const isInView = useInView(container, { once: true, margin: "0%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i) => ({
      y: "0",
      transition: {
        duration: 1.15,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div ref={container} className={`text-7xl tracking-tighter p-10 max-w-6xl ${className}`}>
      {phrases.map((text, index) => {
        return (
          <div key={index} className={`overflow-hidden pb-2 ${index === 0 ? "indent-20" : ""}`}>
            <motion.p
              custom={index}
              initial="initial"
              variants={animation}
              animate={isInView ? "enter" : ""}
              className=""
            >
              {text}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
