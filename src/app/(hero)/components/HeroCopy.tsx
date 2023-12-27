// "use client";

import Link from "next/link";

// import { motion } from "framer-motion";

const HeroCopy = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-9xl text-gray-300">Brimboats</h1>
      {/* <motion.h1
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.1 }}
        className="font-extrabold text-9xl text-gray-300 -translate-y-96"
      >
        Brimboats
      </motion.h1> */}
      <p className="text-xl max-w-lg text-center mb-2 text-gray-300">
        Boat manufacturer, established in 2020. Based in the Faroe Islands.
        Fast, low maintenance boats, built to handle the rough, North Atlantic
        Ocean.
      </p>
      <p className="text-xl max-w-lg text-center text-gray-300">
        The website is currently under construction.
        <br />
        If you have any questions,{" "}
        <Link
          className="text-amber-600"
          target="blank"
          href="mailto:brimboats@brimboats.fo?subject=Regarding%20Brimboats"
        >
          please contact us by mail.
        </Link>
      </p>
      {/* <motion.p
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.1, delay: 0.2 }}
        className="text-xl max-w-lg text-center text-gray-300 -translate-y-96"
      >
        Boat manufacturer, established in 2020. Based in the Faroe Islands.
        Fast, low maintenance boats, built to handle the rough, North Atlantic
        Ocean.
      </motion.p> */}
    </div>
  );
};

export default HeroCopy;
