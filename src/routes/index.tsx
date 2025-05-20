import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home } from '../pages/Home';
import { Employees } from '../pages/Employees';
import { NRs } from '../pages/NRs';
import { Reports } from '../pages/Reports';
import Settings from '../pages/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/employees',
        element: <Employees />
      },
      {
        path: '/nrs',
        element: <NRs />
      },
      {
        path: '/reports',
        element: <Reports />
      },
      {
        path: '/settings',
        element: <Settings />
      }
    ]
  }
]); 