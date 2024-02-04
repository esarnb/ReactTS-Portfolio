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
            setChecks((x) => x + 1);
        }, 1000);
        console.log(timerId);

        return function cleanup() {
            console.log(`Clearing ${timerId}`);
            clearInterval(timerId);
        };
    }, []);

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                let response = await fetch('https://api.esarnb.com/', {
                    headers:{
                      "Accept": 'text/html',
                    }
                });
                let result = await response.text()
                setAPICheck(result === "I exist.")
            } catch (err) {
                console.error(err);
                setAPICheck(false);
            }

            try {
                let response = await fetch('https://api.esarnb.com/MC', {
                    headers:{
                        "Accept": 'text/html',
                    }
                });
                let result = await response.text() === "hi"
                setDediState(result)
            } catch (err) {
                console.error(err);
                setDediState(false);
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
            <Minecraft checks={checks}/>            
        </>
        
    );
}
