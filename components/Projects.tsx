import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="flex lg:w-[70%] md:h-[auto]  flex-col gap-2">
      <Link
        href="/mywork"
        className="  projects flex flex-row h-[50%]  gap-3 rounded-lg text-white hover:rounded-lg "
      >
        <div>
          <h3 className="font-extrabold text-3xl relative left-[2%] top-[70%] ">
            {" "}
            My Works
          </h3>
        </div>
      </Link>
      <Link
        href={"/contact"}
        className=" contact flex flex-row h-[50%]  gap-3 rounded-lg text-white hover:rounded-lg"
      >
        <div>
          <div className="w-[100%] h-[100%] sm:w-[100%]   ">
            <h3 className="font-extrabold text-3xl relative left-[2%] top-[70%] ">
              Contact Me
            </h3>
            {/* <Image
              className="rotate-[20deg] "
              src={"/share2.svg"}
              alt={""}
              height={100}
              width={80}
            /> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
