import { userObj } from "../../Interfaces/Discord";
import "./DiscordUser.css";

export default function DiscordUser({ userData }: any) {
    const user: userObj = userData
    return (
        <h1>
            Welcome, {user.username}! 
        </h1>
    )
}