"use client"
import React, { useCallback, useMemo, useState } from "react";

import Image from "next/image";

import { useDiscordQuery } from "@/services/discord";
import { motion } from "framer-motion";


const DISCORD_ID = '801073563368947742';


export default function Lanyard() {

    const { data, isLoading } = useDiscordQuery(DISCORD_ID);
    const [hourDiff, setHourDiff] = useState<string>(`NA`);

    const lastActivity = useMemo(() => data?.activities[0], [data]);

    const toStructure = useCallback((valueDiffer: number): string => {
        const date = new Date(valueDiffer); // specify value for SECONDS here
        return `${date.toISOString().substring(11, 19)} elapsed`;
    }, []);

    setInterval(() => {
        if (lastActivity)
            setHourDiff(toStructure(Math.abs(lastActivity.timestamps.start - new Date().valueOf())));
    }, 1000);

    if (isLoading || !data) return <>
        <span className="loading loading-ring w-24"></span></>;


    if (lastActivity && data)
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex max-w-[600px] m-auto flex-col items-stretch">
                    <div className="w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex items-stretch w-[30%] max-md:w-full max-md:ml-0">
                                <Image
                                    loading="lazy"
                                    src="/profile.png"
                                    width={500}
                                    height={500}
                                    alt="Profile Image"
                                    className="m-auto mb-9 aspect-square rounded-full border border-solid border-zinc-500 object-contain object-center w-[175px] overflow-hidden shrink-0 max-w-full lg:mb-0  lg:w-[150px]"
                                />
                                {/* <img
                                loading="lazy"
                                src="/profile.png"
                                alt="Gustavo Image"
                                className="m-auto mb-9 aspect-square object-contain object-center w-[175px] overflow-hidden shrink-0 max-w-full lg:mb-0  lg:w-[150px]"
                            /> */}
                            </div>
                            <div className="flex flex-col items-stretch w-[70%] ml-5 max-md:w-full max-md:ml-0 ">
                                <div className="bg-zinc-500 bg-opacity-5 flex grow flex-col items-center w-full pl-10 pr-14 pt-1 pb-4 rounded-md border border-solid border-zinc-500">
                                    <motion.div
                                        initial={{ opacity: 0.5 }}
                                        whileTap={
                                            {
                                                scale: 2,
                                                opacity: 1
                                            }

                                        }
                                        whileHover={{
                                            scale: 1.2,
                                            opacity: 0.85
                                        }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <a href="https://discordapp.com/users/801073563368947742">
                                            <Image
                                                loading="lazy"
                                                src='/purplediscordicon.png'
                                                width={500}
                                                height={500}
                                                alt="Discord Image"
                                                className="aspect-[1.87] object-contain object-center w-[99px] overflow-hidden max-w-full mt-2"
                                            />
                                        </a>
                                    </motion.div>
                                    <div className=" text-5xl self-stretch whitespace-nowrap mt-3 text-center">
                                        @{data?.discord_user.global_name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-500 bg-opacity-5 flex w-full flex-col items-stretch mt-10 pl-6 pr-11 py-5 rounded-lg border border-solid border-zinc-500">
                        <div className=" text-3xl">Currently on:</div>
                        <div className="flex items-stretch justify-between gap-4 mt-4">
                            <div className="flex-col overflow-hidden relative flex aspect-square w-[77px] items-center pl-14 pr-1 pt-12 pb-1">
                                {lastActivity.assets?.large_image ? <><img
                                    loading="lazy"
                                    src={`https://cdn.discordapp.com/app-assets/${lastActivity.application_id}/${lastActivity.assets?.large_image}`}
                                    className="rounded-2xl absolute m-auto w-full inset-0"
                                />
                                <img
                                    loading="lazy"
                                    src={`https://cdn.discordapp.com/app-assets/${lastActivity.application_id}/${lastActivity.assets?.small_image}`}
                                    className="rounded-full absolute  w-6 shadow-sm  top-14 overflow-hidden"
                                />
                                </>
                                :  
                                <img
                                    loading="lazy"
                                    src={`https://cdn.discordapp.com/app-assets/${lastActivity.application_id}/${lastActivity.assets?.small_image}`}
                                    className="rounded-2xl absolute m-auto w-full inset-0"
                                />
                                }
                               
                            </div>
                            <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                                <div className=" text-2xl whitespace-nowrap">
                                    {lastActivity.name}
                                </div>
                                <div className=" text-2xl whitespace-nowrap">
                                    {lastActivity.details}
                                </div>
                                <div className=" text-2xl whitespace-nowrap">
                                    {hourDiff}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    else if (data?.discord_status === `idle` && !lastActivity) return <h2 className="flex flex-inline text-1xl">Ustav is online! but doing nothing.</h2>;
    else return <h2 className="flex flex-inline text-1xl">Ustav is now offline :c</h2>
}