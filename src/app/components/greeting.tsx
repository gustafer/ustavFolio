"use client";
import { motion } from "framer-motion";
import Lanyard from "./lanyard";
import React from "react";

export default function Greeting() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-row lg:flex pt-24 transition-colors duration-500"
    >
      <div className="lg:w-1/2 lg:mb-0 ">
        <div className="p-10 lg:p-20 flex flex-col  justify-center w-full h-full ">
            <h1 className="text-3xl lg:text-4xl pb-3">
              Hello!
            </h1>
            <h2 className="text-2xl lg:text-3xl mt-3 pb-10">
              I'm a Brazilian 16 y/o front-end developer.
            </h2>
          <div className="flex flex-row w-full justify-center items-center gap-5 p-5">
            <button className="g-2 flex btn bg-base-200 border border-solid border-zinc-500 text-lg hover:border-base-300">Contact Me</button>
            <button className="g-2 flex btn bg-base-200 border border-solid border-zinc-500 text-lg hover:border-base-300">Read More</button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 p-3 ">
        <Lanyard />
      </div>
    </motion.div>
  );
}
