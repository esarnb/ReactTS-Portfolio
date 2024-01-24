import { NotFound, PageNotReady } from "../components/NotFound/NotFound";
import CodeHighlightExample from '../components/CodeHighlightExample/CodeHighlightExample'
import Home from "../pages/Home/Home";

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
        element: <PageNotReady />,
        label: "3D Models",
        icon: null,
        description: null
        // description: "Printed Models from 3D Printer"
    },
    {
        path: '*',
        element: <NotFound />,
        label: null,
        icon: null,
        description: null
    },
];

export {
    pages
}