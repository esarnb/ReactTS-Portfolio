import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { pages } from './NavConstants';

const router = createBrowserRouter(pages);
export function Router() {
    return <RouterProvider router={router} />;
}