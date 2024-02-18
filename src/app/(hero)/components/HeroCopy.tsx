// "use client";

import Link from "next/link";

// import { motion } from "framer-motion";

const HeroCopy = () => {
  return (
    <div className="flex flex-col px-4 justify-center items-center">
      <h1 className="font-extrabold text-7xl max-w-2xl mb-4 text-center text-gray-300">
        Brim Boats
        {/* Master the Waves with Faroe Ingenuity */}
      </h1>
      {/* <motion.h1
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.1 }}
        className="font-extrabold text-9xl text-gray-300 -translate-y-96"
      >
        Brimboats
      </motion.h1> */}
      <p className="text-xl max-w-lg text-center mb-2 text-gray-300">
        Crafted from recyclable high-density polyethylene (HDPE), boast a sleek,
        efficient design, offering both strength and reliability. Navigate
        confidently in offshore conditions.
        {/* Since 2020, Brimboats has crafted fast, durable boats for the North
        Atlantic&apos;s challenges. */}
      </p>
      <p className="text-xl max-w-lg text-center text-gray-300">
        Where toughness meets the horizon.{" "}
      </p>
      <p className="text-xl mt-4 max-w-lg text-center text-gray-300">
        <Link
          className="text-amber-600"
          target="blank"
          href="mailto:brimboats@brimboats.fo?subject=Regarding%20Brimboats"
        >
          For now, contact us here.
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
