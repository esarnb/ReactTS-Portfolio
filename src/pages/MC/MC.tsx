import { useEffect, useState } from "react";
import { secondsToTime } from "../../utils/conversion";
import { Loader } from "@mantine/core";
import Minecraft from "../../components/Minecraft/Minecraft";
import "./MC.css";

export default function MC() {
    const [apiCheck, setAPICheck] = useState<boolean | undefined>(undefined);
    const [dediState, setDediState] = useState<boolean | undefined>(undefined);
    const [checks, setChecks] = useState(0);

    useEffect(() => {
        const timerId = setInterval(async () => {
            setChecks((x) => x + 5);
        }, 5000);
        console.log(timerId);

        return function cleanup() {
            console.log(`Clearing ${timerId}`);
            clearInterval(timerId);
        };
    }, []);

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                let response = await fetch('127.0.0.1:4242/MC')
                let result = await response.text() == "hi"
                setDediState(result)
            } catch (err) {
                console.error(err);
                setDediState(false);
            }

            try {
                let response = await fetch('127.0.0.1:4242', {mode: 'cors'})
                let result = await response.text() == "I exist."                
                setAPICheck(result)
            } catch (err) {
                console.error(err);
                setAPICheck(false);
            }
        }
        fetchMyAPI()
    }, [checks])

    return (
        <>
            <div className="container">
                <h2 className="outer">Dedicated Server {dediState === undefined ? <Loader size={20} /> : dediState ? "🟢" : "🔴"}
                    <span className="superTinyText bottom">API Check: {apiCheck === undefined ? <Loader size={9} /> : apiCheck ?  "🟢" : "🔴"}</span>
                    <span className="tinyText top">[{secondsToTime(checks)}]</span>
                </h2>
            </div>
            {JSON.stringify({server: dediState, api: apiCheck})}

                <Minecraft checks={checks}/>            

        </>
        
    );
}
