import { useEffect, useState } from "react";
import {  botData  } from "../../Interfaces/Discord";

var initial = {
    user: {
      tag: ""
    },
    users: 0,
    servers: 0,
    commands: []
  }
  
  function DiscordBot() {
    const [isLoading, setIsLoading] = useState(true);
    const [bot, setBot] = useState<botData>(initial);
  
    useEffect(() => {
      // Abort Request if local API is down, ignore browser based timeouts just for this API
      const controller = new AbortController()
  
      // 5 second timeout:
      const timeoutId = setTimeout(() => controller.abort(), 5000)
  
      fetch("https://bot.esarnb.com/discord", { signal: controller.signal })
        .then(res => {
          // completed request before timeout fired
          
          clearTimeout(timeoutId) // timeout the request, not the response
          console.log("Status: ", res.status);
          return res.json()
        })
        .then(bot => {
          setBot(bot);
          console.log(bot);
        })
        .finally(() => {
          setIsLoading(false);
        })
        .catch(err => {
          console.error(err);
          initial.user.tag = "Offline."
        });
    }, []);
  
    return (
      <>
        <div style={{textAlign: "center", justifyContent: "center"}}>
          { isLoading ? 
            <>
              Fetching Bot data...
            </> : <>
  
              {
                (bot.user.tag && (bot.user.tag !== "Offline.") ) 
                ? <div>
                    {bot.user.tag} is now online! Serving {bot.users} users and {bot.servers} servers.
                  
                    
                  </div> 
                : <p>Bot is offline.</p>
              }
  
            </>
          }
        </div>
      </>
    );
  }
  
  export default DiscordBot;