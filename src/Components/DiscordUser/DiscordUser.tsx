import { DiscordAuthStateType } from "../../Interfaces/Discord";
import "./DiscordUser.css";

export default function DiscordUser({userData}: {userData: DiscordAuthStateType}) {
    console.log(userData);
    
    return (
        <h1>
            Welcome, {userData.username}! 
        </h1>
    )
}