export interface DiscordResponse {
    data: DiscordResponseData;
}

export interface DiscordResponseData {
    discord_user: DiscordResponseDataUser;
    activities: DiscordResponseDataActivity[];
    discord_status: string;
}

interface DiscordResponseDataUser {
    username: string;
    global_name: string;
    avatar: string;
}

interface DiscordResponseDataActivity {
    name: string;
    state: string;
    details: string;
    application_id: string;
    assets: DiscordResponseDataActivityAssets;
}

interface DiscordResponseDataActivityAssets {
    large_image: string;
    small_image: string;
}