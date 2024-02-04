import { useEffect, useState } from "react";
import { ServerInfo } from "../../models/minecraft";
import { Loader } from "@mantine/core";
import { servers } from "../../utils/servers";
import Card from "../Card/Card";
import "./Minecraft.css";

export default function Minecraft({ checks }: any) {
    const [serverStatus, setServerStatus] = useState<ServerInfo[] | undefined>(undefined);

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                let response = await fetch('127.0.0.1:4242/MC/servers', { mode: 'cors' })
                let result = await response.json();
                setServerStatus(result)
            } catch (err) {
                console.error(err);
                setServerStatus(undefined);

            }
        }
        fetchMyAPI()
    }, [checks])

    return (
        <div className="container">
            {
                servers.map((x, i) => {
                    return <Card
                        className="item"
                        image={`/servers/${x}.png`}
                        imgSize={180}
                        title={formatTitle(i, serverStatus?.[i])}
                        description={formatStats(serverStatus?.[i])}>
                    </Card>
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
            {serverStatus.current.onlinePlayerCount ? <p>Players: {serverStatus.current.players.map(x => x.name).join(", ")} </p> : null}
            <p>CPU: {Math.round(+serverStatus.usage.cpu)}% </p>
            <p>Mem: {Math.round(+serverStatus.usage.memory)}% </p>
        </>
    )
}