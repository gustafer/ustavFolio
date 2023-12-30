"use client"
import React from "react";
import { useLanyard } from "use-lanyard";
const DISCORD_ID = '801073563368947742';

export default function Lanyard() {
    const { data } = useLanyard(DISCORD_ID);

    return (
        <>
            <div className="card card-bordered m-24 flex w-full">
                <h1 className="text-6xl">{data?.discord_user.global_name}<span className="text-2xl ">{data?.discord_status}</span></h1>
                <h2 className="text-3xl">currently doing:</h2>
                <h2 className="text-3xl"></h2>
            </div>
        </>
    );
}