import { useContext, useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'
import { DiscordActionEnum, userObj } from "../../Interfaces/Discord";
import DiscordUser from "../../Components/DiscordUser/DiscordUser";
import DiscordBot from "../../Components/DiscordBot/DiscordBot";
import { DiscordContext } from "../../Contexts/DiscordContext";
import { Helmet } from "react-helmet";
import "./Discord.css";

const oauthURL = "https://discord.com/api/oauth2/authorize?client_id=343831827963838475&redirect_uri=https%3A%2F%2Fesarnb.com%2Fdiscord&response_type=code&scope=identify";
export default function Discord() {
    const { state, dispatch } = useContext(DiscordContext);
    const [userData, setUserData] = useState<userObj>();
    const [searchParams, setSearchParams] = useSearchParams();
    const code = searchParams.get('code');

    useEffect(() => {
        console.log("State", state);
        console.log("Code", code);

        if (state.code || code) {
            if (!state.code && code) dispatch({ type: DiscordActionEnum.setCode, payload: code });
            
            fetch("https://api.esarnb.com/discord?code=" + (state.code ?? code)).then((res) => res.json()).then((data: userObj) => {
                setUserData(data);
            }).catch(err => console.error(err));

            searchParams.delete("code");
            setSearchParams(searchParams);

            if (state.code) {
                console.log("STATEFUL FETCHING");
                fetch("https://api.esarnb.com/discord?code=" + state.code).then((res) => res.json()).then((data: userObj) => {
                    console.log("STATEFUL FETCH", data);
                }).catch(err => console.error(err));
            }
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
                userData ? <DiscordUser userData={userData} /> :
                <a href={oauthURL}>
                    <button>
                        Login to Discord
                    </button>
                </a>
            }
            <p>{state.code}</p>
        </>
    )
}
