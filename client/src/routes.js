import { Navigate, useRoutes } from 'react-router-dom';
import Addjobs from './components/AddJobs/Addjobs';
import FreshGraduate from './components/FreshGraduate/FreshGraduate';
import LandingPage from './components/LandingPage/LandingPage';
import Sidebar from './components/Sidebar/Sidebar';
import User from './components/User/User';
// layouts

//


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <Sidebar />,
      children: [
        { path: 'freshGraduate', element: <FreshGraduate /> },
        { path: 'user', element: <User/> },
        { path: 'addjobs', element: <Addjobs /> },
      ],
    },
    {
      path: '/',
      element: <LandingPage />,
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
