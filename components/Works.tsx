"use ";
import React from "react";
import Projects from "./Projects";
import { PROJECTS } from "@/constants";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Works = () => {
  return (
    <div className="flex mt-10 flex-col flex-wrap  w-100 h-100">
      <div className="flex w-[100%] flex-wrap gap-2 items-center justify-evenly md:w-[100%]">
        {PROJECTS.map((work) => (
          <div className=" w-[90%] mt-4 border-2 p-3 bg-gray-50 rounded-lg md:w-[40%] cursor-pointer flex h-auto flex-col ">
            <Image
              className="w-full border-b-black rounded-sm"
              src={work.image}
              alt={work.name}
              width={500}
              height={50}
            />

            <div className="w-full p-2 flex flex-col align justify-center">
              <h3 className="font-bold mb-3 text-[32px] uppercase ">
                {work.name}
              </h3>
              <p>{work.description}</p>
              <div className="flex flex-row gap-5 justify-center flex-wrap mt-3">
                
              </div>
              <div className="flex justify-center mt-5 flex-row">
                <Link href={work.link}>
                  <Button
                    type={"button"}
                    title={"Live Demo"}
                    icon={"/link.svg"}
                    color="p-2 "
                    height={20}
                    width={20}
                  />
                </Link>
                <Link className="ml-5" href={work.ghubLink}>
                  <Button
                    type={"button"}
                    title={"Github"}
                    icon={"/github (1).svg"}
                    color="bg-white  border-1 p-2 hover:border-black"
                    height={20}
                    width={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
