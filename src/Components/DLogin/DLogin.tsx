import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import DiscordUser from "../DiscordUser/DiscordUser";
import { userObj } from "../../Interfaces/Discord";
import "./DiscordUser.css";
export default function DLogin() {

    const { code } = useParams();
    const [userData, setUserData] = useState<userObj>();

    useEffect(() => {
        if (code) {
            fetch("https://api.esarnb.com/discord?code=" + code).then((res) => res.json()).then((data: userObj) => {
                console.log(data);
                setUserData(data);
            }).catch(err => console.error(err));
        }
    }, [])
    return (
        <>
            {
                userData ? <DiscordUser userData={userData}/> :
                <a href="https://discord.com/api/oauth2/authorize?client_id=343831827963838475&redirect_uri=https%3A%2F%2Fesarnb.com%2Flogin&response_type=code&scope=identify">
                    <button>
                        Login to Discord
                    </button>
                </a>
            }
        </>
    )
}