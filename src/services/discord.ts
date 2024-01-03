import { useQuery } from "@tanstack/react-query";

import axios from "axios"
import { DiscordResponseData, DiscordResponse } from "./discord.types"

const BASE_ADDRESS = `https://api.lanyard.rest`;

const getUserdata = async (userId: string) : Promise<DiscordResponseData> => {
    return (await axios.get<DiscordResponse>(BASE_ADDRESS + `/v1/users/${userId}`)).data.data;
}

export const useDiscordQuery = (userId: string) => {
    return useQuery({
        queryKey: [`discord`, userId],
        queryFn: () => getUserdata(userId),
        refetchInterval: 5000
    })
} 