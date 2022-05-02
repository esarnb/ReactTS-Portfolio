import { Avatar, Box } from "@mantine/core";
import { DiscordAuthStateType } from "../../Interfaces/Discord";
import "./DiscordUser.css";

export default function DiscordUser({userData, dev}: {userData: DiscordAuthStateType, dev: string | null}) {
    console.log(userData);
    let {id, username, avatar, banner, locale} = userData;
    if (avatar) avatar = `https://cdn.discordapp.com/avatars/${id}/${avatar}.${avatar?.startsWith("a_") ? "gif" : "png"}`
    if (banner) banner = `https://cdn.discordapp.com/banners/${id}/${banner}.${banner?.startsWith("a_") ? "gif" : "png"}`
    return (
        <>
            <h1 className="center">
                <p>{dev ? "DEV MODE TRUE" : ""}</p>
                <br />
                Welcome, {username}!
                <p>ID: {id}</p>
                <p>Locale: {locale}</p>
            </h1>
            <Box className="bcontain centerImg" >
                {avatar ? <Avatar src={avatar} alt="avatar" className="avatar" /> : null}
                {banner ? <img src={banner} alt="banner" className="banner" /> : null}
            </Box>
        </>
    )
}