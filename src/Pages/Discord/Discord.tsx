import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'
import {  userObj  } from "../../Interfaces/Discord";
import DiscordUser from "../../Components/DiscordUser/DiscordUser";
import DiscordBot from "../../Components/DiscordBot/DiscordBot";
import "./Discord.css";

export default function Discord() {

    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');

    const [userData, setUserData] = useState<userObj>();
    const oauthURL = "https://discord.com/api/oauth2/authorize?client_id=343831827963838475&redirect_uri=https%3A%2F%2Fesarnb.com%2Fdiscord&response_type=code&scope=identify";

    useEffect(() => {
      console.log("CODE", code);
      if (code) {
            fetch("https://api.esarnb.com/discord?code=" + code).then((res) => res.json()).then((data: userObj) => {
                console.log("DATA", data);
                setUserData(data);
            }).catch(err => console.error(err));
        }
    }, [])
    return (
        <>
          <Helmet>
            <title>Discord</title>
            <meta name="description" content="My Discord page through Helmet" />
          </Helmet>
            <DiscordBot />
            {
                userData ? <DiscordUser userData={userData}/> :
                <a href={oauthURL}>
                    <button>
                        Login to Discord
                    </button>
                </a>
            }
        </>
    )
}
