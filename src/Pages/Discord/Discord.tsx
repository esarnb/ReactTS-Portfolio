import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import "./Discord.css";

function Discord() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {

    fetch("http://localhost:3434/discord/").then(res => {
      console.log("Status: ", res.status);
      
      return res.json()
    }).catch(err => console.error(err))
    .then(data => {
      setIsLoading(false);
      setData(data);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Discord</title>
        <meta name="description" content="My Discord page through Helmet" />
      </Helmet>
      <p>
        {JSON.stringify(data)}
      </p>
    </>
  );
}

export default Discord;