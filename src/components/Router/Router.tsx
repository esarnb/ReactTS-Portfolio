import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { pages } from '../../constants/Nav';

const router = createBrowserRouter(pages);
export function Router() {
    return <RouterProvider router={router} />;
}