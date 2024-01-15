import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


type LanyardCardProps = {
    username: string;
    title: string;
    image: React.ReactNode;
    lastActivityName?: string;
    lastActivityState?: string;
    lastActivityDetails?: string;
    hourDiff?: string;
};

const LanyardCard = (props: LanyardCardProps) => {
  return (
      // todo: it bugs every second for some reason when using motiondiv
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
        <div className="flex max-w-[600px] m-auto flex-col items-stretch p-3">
          <div className="w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex justify-center items-center w-[30%] max-md:w-full max-md:ml-0">
                <Image
                  loading="lazy"
                  src="/profile.png"
                  width={500}
                  height={500}
                  alt="Profile Image"
                  className="mb-5 aspect-square rounded-full border border-solid border-zinc-500 object-contain object-center w-[175px] overflow-hidden shrink-0 max-w-full lg:mb-0  lg:w-[150px]"
                />
                {/* <img
                        loading="lazy"
                        src="/profile.png"
                        alt="Gustavo Image"
                        className="m-auto mb-9 aspect-square object-contain object-center w-[175px] overflow-hidden shrink-0 max-w-full lg:mb-0  lg:w-[150px]"
                    /> */}
              </div>
              <div className="flex flex-col items-stretch w-[70%] ml-5 max-md:w-full max-md:ml-0 ">
                <div className="bg-base-200 flex grow flex-col items-center w-full pl-10 pr-14 pt-1 pb-4 rounded-md border border-solid border-zinc-500">
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    whileTap={{
                      scale: 2,
                      opacity: 1,
                    }}
                    whileHover={{
                      scale: 1.2,
                      opacity: 0.85,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <a
                      href="https://discordapp.com/users/801073563368947742"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/purplediscordicon.png"
                        width={500}
                        height={500}
                        alt="Discord Image"
                        className="aspect-[1.87] object-contain object-center w-[99px] overflow-hidden max-w-full mt-2"
                      />
                    </a>
                  </motion.div>
                  <div className=" text-5xl self-stretch whitespace-nowrap mt-3 text-center">
                    {props.username}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-base-200 flex w-full flex-col items-stretch mt-10 pl-6 pr-11 py-5 rounded-lg border border-solid border-zinc-500">
            <div className=" text-3xl">{props.title}</div>
            <div className="flex items-stretch justify-between gap-4 mt-4">
              <div className="flex flex-col relative  aspect-square min-w-[90px] items-center">
                {props.image}
              </div>
              <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto overflow-auto">
                <div className=" text-2xl lg:text-2xl whitespace-nowrap">
                {props.lastActivityName}
                </div>
                <div className=" text-xl lg:text-2xl whitespace-nowrap">
                  {props.lastActivityState}
                </div>
                <div className=" text-xl lg:text-2xl whitespace-nowrap">
                  {props.lastActivityDetails}
                </div>
                <div className=" text-xl lg:text-2xl whitespace-nowrap">
                  {props.hourDiff}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
  );
};
export default LanyardCard;
