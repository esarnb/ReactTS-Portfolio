import { useEffect, useState } from "react";
import "./CardFooter.css";
import "../../App.css";
export function CardFooter(props: any) {
    const {lang, updated} = props;
    const [icons, setIcons] = useState<string|undefined>();
    
    useEffect(() => {
        let newLang;
        // const getIcons = language.map((lang: any) => {
        switch(lang) {
            case "JavaScript": newLang = ("JS"); break;
            case "TypeScript": newLang = ("TS"); break;
            case "Java": newLang = ("Java"); break;
            case "Python": newLang = ("Py"); break;
            default: newLang = undefined;
        }
        // });
        setIcons(newLang);
    })

    return (
        <>
            {
                updated ? <i className="tiny float-right">Last Updated: {`${updated.getMonth()+1}/${updated.getDate()}/${updated.getFullYear()}`}</i> : <></>
                // updated ? <i className="tiny float-right">Last Updated: {updated.toLocaleString()}</i> : <></>
            }

            {icons ? <div className="tiny">{icons}</div> : <></>}
        </>
    )
}