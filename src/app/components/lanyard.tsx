"use client"
import React, { useMemo, useState } from "react";

import { useDiscordQuery } from "@/services/discord";
const DISCORD_ID = '801073563368947742';


export default function Lanyard() {

    const { data, isLoading } = useDiscordQuery(DISCORD_ID);

    const lastActivity = useMemo(() => data?.activities[0], [data]);

    if (isLoading) return <>
        <span className="loading loading-ring w-24"></span></>;
    if (!data || !lastActivity) return <>
        <h2 className="flex flex-inline text-1xl">Ustav is now offline :c</h2>
    </>;
    if (!lastActivity) return <>
        <h2 className="flex flex-inline text-1xl">Ustav is online! but doing nothing.</h2>
    </>
    return (

        <div className=" ">
            <div >
                <div className="">
                    <img src="https://cdn.discordapp.com/avatars/801073563368947742/24d97b5a975d186c42c446a95477e2ff.png?size=512" className="rounded-full h-14 shadow-lg w-14" width="24" height="24" draggable="false" alt="user avatar"></img>
                    <div className="card card-bordered w-full border-zinc-500 flex sm: flex-none">
                        <h1 className="text-6xl flex justify-center ">{data?.discord_user.global_name}<span className="text-2xl">{data?.discord_status}</span></h1>
                        <h2 className="text-3xl flex justify-center">currently on:</h2>
                        <h2 className="text-3xl flex justify-center">{lastActivity.name}</h2>
                        <h2 className="text-3xl flex justify-center">{lastActivity.details}</h2>
                        <div>
                            <img src={`https://cdn.discordapp.com/app-assets/${lastActivity.application_id}/${lastActivity.assets?.large_image}`} draggable="false" alt="Large image" className="rounded-xl h-28 w-28"></img>
                            <img src={`https://cdn.discordapp.com/app-assets/${lastActivity.application_id}/${lastActivity.assets?.small_image}`} draggable="false" alt="Small image" className="rounded-full bg-gray-100 bg-opacity-20 h-6 right-0 bottom-0 ring-4 ring-gray-100 ring-opacity-20 w-6 absolute"></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}