import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";


const  QuoteAnimation= () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Percentage of visibility to trigger the animation
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="mb-20 max-w-[473px]"
    >
      <div className="text-white text-4xl mb-4">
        <Image width={20} height={20} src="/quote.svg" alt="quote" />
      </div>
      <p className="text-white text-[18px] font-medium leading-[38px]">
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software.
      </p>
      <div className="w-full flex justify-between items-center mt-6">
        <div className="flex items-center">
          <span className="text-white font-medium">Onele Augustine</span>
          <div className="ml-2 w-4 h-4 rounded-full bg-secondaryColor text-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* Bottom corner decoration */}
        <div className="">
          <Image width={20} height={20} src="/right-angle.svg" alt="Bottom corner" />
        </div>
      </div>
    </motion.div>
  );
};

export default QuoteAnimation