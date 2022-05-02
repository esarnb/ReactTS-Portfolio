import { DiscordAuthStateType } from "../../Interfaces/Discord";
import "./DiscordUser.css";

export default function DiscordUser({userData, dev}: {userData: DiscordAuthStateType, dev: string | null}) {
    console.log(userData);
    let {id, username, avatar, banner, locale} = userData;
    if (avatar) avatar = `https://cdn.discordapp.com/avatars/${id}/${avatar}.${avatar?.startsWith("a_") ? "gif" : "png"}`
    if (banner) banner = `https://cdn.discordapp.com/banners/${id}/${banner}.${banner?.startsWith("a_") ? "gif" : "png"}`
    return (
        <h1>
            {dev ? "DEV MODE TRUE" : ""}
            Welcome, {username}!
            <p>ID: {id}</p>
            <p>Locale: {locale}</p>
            {avatar ? <p>Avatar: <img src={avatar} alt="avatar" /> </p> : <>No avatar</>}
            {banner ? <p>Banner: <img src={banner} alt="banner" /> </p> : <>No banner</>}
        </h1>
    )
}