import { NotFound, PageNotReady } from "../NotFound/NotFound";
import CodeHighlightExample from '../CodeHighlightExample/CodeHighlightExample'
import PrinterModels from '../PrinterModels/PrinterModels';
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
        element: <PageNotReady />,
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
        element: <PageNotReady />,
        label: "Minecraft",
        icon: null,
        description: null
    },
    {
        path: '/3d',
        element: <PrinterModels />,
        label: "3D Models",
        icon: null,
        description: null
        // description: "Printed Models from 3D Printer"
    }
];

export {
    pages
}