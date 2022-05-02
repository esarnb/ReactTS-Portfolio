import { useContext, useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'
import { DiscordActionEnum, DiscordAuthMock, userObj } from "../../Interfaces/Discord";
import DiscordUser from "../../Components/DiscordUser/DiscordUser";
import DiscordBot from "../../Components/DiscordBot/DiscordBot";
import { DiscordContext } from "../../Contexts/DiscordContext";
import { Helmet } from "react-helmet";
import "./Discord.css";

const oauthURL = "https://discord.com/api/oauth2/authorize?client_id=343831827963838475&redirect_uri=https%3A%2F%2Fesarnb.com%2Fdiscord&response_type=code&scope=identify";
export default function Discord() {
    const { state, dispatch } = useContext(DiscordContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const code = searchParams.get('code');
    const dev = searchParams.get('dev');
    
    useEffect(() => {
        if (code) {
            fetch("https://api.esarnb.com/discord?code=" + code).then((res) => res.json()).then((data: userObj) => {
                if (data) dispatch({ type: DiscordActionEnum.setData, payload: data });
            }).catch(err => console.error(err));
        } 
        else if (dev) dispatch({ type: DiscordActionEnum.setData, payload: DiscordAuthMock });
        
        searchParams.delete("code");
        setSearchParams(searchParams);
    }, []);

    return (
        <>
            <Helmet>
                <title>Discord</title>
                <meta name="description" content="My Discord page through Helmet" />
            </Helmet>
            <DiscordBot />
            {
                state?.id ? <DiscordUser userData={state} dev={dev}/> :
                <a href={oauthURL}>
                    <button className="centerDiv" >
                        Login to Discord
                    </button>
                </a>
            }
        </>
    )
}
