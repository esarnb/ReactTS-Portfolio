import { PageNeedsAPI, PageNotReady } from "../NotFound/NotFound";
import CodeHighlightExample from '../CodeHighlightExample/CodeHighlightExample'
import MC from '../../pages/MC/MC'
import Prints from '../../pages/Prints/Prints';
import Home from "../../pages/Home/Home";

const pages = [
    {
        path: '/',
        element: <Home />,
        label: "Home",
        icon: null,
        description: null
    },
    {
        path: '/codes',
        element: <CodeHighlightExample />,
        label: "Code",
        icon: null,
        description: null
    },
    {
        path: '/github',
        element: <PageNeedsAPI />,
        label: "Github",
        icon: null,
        description: null
    },
    {
        path: '/threejs',
        element: <PageNotReady />,
        label: "Three JS",
        icon: null,
        description: null
    },
    {
        path: '/mc',
        element: <MC />,
        label: "Minecraft",
        icon: null,
        description: null
    },
    {
        path: '/3d',
        element: <Prints />,
        label: "3D Models",
        icon: null,
        description: null
        // description: "Printed Models from 3D Printer"
    }
];

export {
    pages
}