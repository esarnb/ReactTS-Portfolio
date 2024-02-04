import { useEffect, useState } from "react";
import { ServerInfo } from "../../models/minecraft";
import { Loader } from "@mantine/core";
import { servers } from "../../utils/servers";
import Card from "../Card/Card";
import "./Minecraft.css";

export default function Minecraft({ healthCheck }: any) {
    const [serverStatus, setServerStatus] = useState<ServerInfo[] | undefined>(undefined);
    const [countdown, setCountdown] = useState(10);
    async function fetchMyAPI() {
        try {
            let response = await fetch('https://api.esarnb.com/MC/servers', {
                headers:{
                    'Accept': 'application/json',
                }
            });
            let result = await response.json();
            setServerStatus(result)
        } catch (err) {
            console.error(err);
            setServerStatus(undefined);
        }
    }

    useEffect(() => {
        let countdown: any;
        
        fetchMyAPI();
        
        countdown = setInterval(async () => {
            setCountdown((x) => {
                return x-1;
            });
        }, 1000);

        return function cleanup() {
            clearInterval(countdown);
        };
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            healthCheck();
            fetchMyAPI().then(() => {
                setCountdown(10);
            });
        }
    }, [countdown])

    return (
        <div className="mc-container">
            {
                servers.map((x, i) => {
                    return <Card
                        className="mc-item"
                        image={`/servers/${x}.png`}
                        imgSize={175}
                        title={formatTitle(i, serverStatus?.[i])}
                        description={formatStats(serverStatus?.[i])}
                        footer={countdown <= 0 ? <Loader size={20}/> : countdown} />
        })
            }
        </div>
    );
}

function formatTitle(position: number, serverStatus?: ServerInfo) {
    if (!serverStatus) {
        return <>
            {servers[position]} <Loader size={10} />
        </>;
    } else {
        return <> {serverStatus.info.dir} {serverStatus.current.status === "online" ? "🟢" : "🔴"} </>
    }
}

function formatStats(serverStatus?: ServerInfo) {
    if (serverStatus) return (
        <>
            <p>Players Online: {serverStatus.current.onlinePlayerCount} </p>
            <p>Players: {serverStatus.current.players.map(x => x.name).join(", ")} </p>
            <p>CPU: {Math.round(+serverStatus.usage.cpu)}% | Mem: {Math.round(+serverStatus.usage.memory)}%</p> 
            <p>Mem in GB: {(((+serverStatus.usage.memory * +serverStatus.info.memory)/100)/1024).toFixed(3)}/{(+serverStatus.info.memory/1024).toFixed(3)}</p>
        </>
    )
}


    