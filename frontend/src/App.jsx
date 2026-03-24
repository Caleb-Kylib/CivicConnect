import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Bills from './pages/Bills';
import BillDetails from './pages/BillDetails';
import Rights from './pages/Rights';
import Participate from './pages/Participate';
import Learn from './pages/Learn';
import FindLeaders from './pages/FindLeaders';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'bills',
                element: <Bills />,
            },
            {
                path: 'bills/:id',
                element: <BillDetails />,
            },
            {
                path: 'rights',
                element: <Rights />,
            },
            {
                path: 'participate',
                element: <Participate />,
            },
            {
                path: 'learn',
                element: <Learn />,
            },
            {
                path: 'find-leaders',
                element: <FindLeaders />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
