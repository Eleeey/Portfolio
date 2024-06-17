
import { ICONS } from "@/data";
import Image from "next/image";
import React from "react";
// import { motion } from "framer-motion";
// import { backOut } from "framer-motion/dom";
const Icons = () => {
  return (
    <div
      // initial={{
      //   scale: "0.5",
      // }}
      // animate={{
      //   scale: "1",
      // }}
      // transition={{ duration: "1", ease: "backOut" }}
      className="flex  mt-12 flex-row gap-12 flex-wrap justify-center"
    >
      {ICONS.map((icon) => (
        <div className="flex flex-col items-center justify-around">
          <Image
            src={`${icon.name}`}
            alt={`${icon.label}`}
            key={`${icon.key}`}
            width={100}
            height={50}
          />
          <label className="text-center ">{`${icon.label}`}</label>
        </div>
      ))}
    </div>
  );
};

export default Icons;
