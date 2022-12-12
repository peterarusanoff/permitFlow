import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../component/Home';
import Indoor from '../component/Indoor';
import Exterior from '../component/Exterior';
import Construction from '../component/Construction';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/indoor',
        element: <Indoor />,
    },
    {
        path: '/outdoor',
        element: <Exterior />,
    },
    {
        path: '/construction',
        element: <Construction />,
    },
]);

const Routes = () => {
    return <RouterProvider router={router} />;
};
export default Routes;
