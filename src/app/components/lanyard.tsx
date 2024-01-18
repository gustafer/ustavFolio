"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDiscordQuery } from "@/services/discord";
import LanyardCard from "./lanyardCard";

const INITIAL_STATE = "NA";
const DISCORD_ID = "801073563368947742";

export default function Lanyard() {
  const { data, isLoading } = useDiscordQuery(DISCORD_ID);
  const [hourDiff, setHourDiff] = useState<string>(INITIAL_STATE);

  const lastActivity = useMemo(() => data?.activities[data.activities.length - 1], [data]);

  const toStructure = useCallback((valueDiffer: number): string => {
    const date = new Date(valueDiffer); // specify value for SECONDS here
    return `${date.toISOString().substring(11, 19)} elapsed`;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lastActivity && lastActivity.timestamps)
        setHourDiff(
          toStructure(
            Math.abs(lastActivity.timestamps.start - new Date().valueOf())
          )
        );
      else setHourDiff(INITIAL_STATE);
    }, 1000);
    return () => clearInterval(interval);
  }, [lastActivity]);

  if (isLoading || !data)
    return (
      <>
        <span className="loading loading-ring w-24"></span>
      </>
    );

  if (lastActivity && data)
    return (
      <>
        <LanyardCard
          title="Currently on:"
          username={`@` + data?.discord_user.global_name}
          image={
            <>
              {lastActivity.assets?.large_image ? (
                <img
                  loading="lazy"
                  src={`https://cdn.discordapp.com/app-assets/${lastActivity.application_id}/${lastActivity.assets?.large_image}`}
                  width={100}
                  className="rounded-2xl m-auto inset-0"
                />
              ) : (
                <></>
              )}
              {lastActivity.assets?.small_image &&
              lastActivity.assets?.large_image ? (
                <img
                  loading="lazy"
                  src={`https://cdn.discordapp.com/app-assets/${lastActivity.application_id}/${lastActivity.assets?.small_image}`}
                  className="rounded-full absolute  w-10 shadow-sm  inset-y-20 left-16 overflow-hidden"
                />
              ) : ( <></>
              )}
              {lastActivity.assets?.small_image &&
              !lastActivity.assets?.large_image ? (
                <img
                  loading="lazy"
                  src={`https://cdn.discordapp.com/app-assets/${lastActivity.application_id}/${lastActivity.assets?.small_image}`}
                  className="rounded-2xl absolute m-auto w-full inset-0"
                />
              ) : (
                <></>
              )}
              {!lastActivity.assets?.small_image &&
              !lastActivity.assets?.large_image ? (
                <img
                  loading="lazy"
                  src={`https://yt3.googleusercontent.com/Ef_ZAG00wH4s02r9xYlD3j_ftVFKVahGGOQ6iEhNU5_7ZrYBR8sogDYzaz0Lxy05XuSA9JU88w=s900-c-k-c0x00ffffff-no-rj`}
                  className="rounded-2xl absolute m-auto w-full inset-0"
                />
              ) : (
                <></>
              )}
            </>
          }
          lastActivityName={lastActivity.name}
          lastActivityState={lastActivity.state}
          lastActivityDetails={lastActivity.details}
          hourDiff={hourDiff}
        />
      </>
    );
  else if (data?.discord_status === `idle` && !lastActivity)
    return (
      <LanyardCard
        title="Ustav is online!"
        username={`@` + data?.discord_user.global_name}
        image={
          <>
            <img
              loading="lazy"
              src={`https://cdn3.emoji.gg/emojis/3929_idle.png`}
              className="rounded-2xl absolute m-auto w-10 inset-0"
            />
          </>
        }
        lastActivityName="Currently idling."
      />
    );
  else
    return (
      <LanyardCard
        title="Ustav is now offline"
        username={`@` + data?.discord_user.global_name}
        image={
          <>
            <img
              loading="lazy"
              src={`https://cdn3.emoji.gg/emojis/7445_status_offline.png`}
              className="rounded-2xl absolute m-auto w-10 inset-0"
            />
          </>
        }
        lastActivityName={
          "Maybe check out his " +
          // todo: change this to anchor
          "skills" +
          "?"
        }
      />
    );
}
