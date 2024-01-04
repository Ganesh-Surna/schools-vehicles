import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './UI/RootLayout';
import Dashboard from './components/dashboard/Dashboard';
import History from './components/history/History';
import Reports from './components/reports/Reports';
import Vehicles from './components/vehicles/Vehicles';
import Settings from './components/settings/Settings';
import Drivers from './components/drivers/Drivers';
import Schools from './components/schools/Schools';
import Parents from './components/parents/Parents';
import Riders from './components/riders/Riders';
import PromoCode from './components/promo-code/PromoCode';

const router = createBrowserRouter([
  {
    path: '/',
    id: "root",
    element: <RootLayout/>,
    children: [
      {index: true, element: <Dashboard/>,},
      {path: "trips", element: <History/>},
      {path: "vehicles", element: <Vehicles/>},
      {path: "drivers", element: <Drivers/>},
      {path: "schools", element: <Schools/>},
      {path: "promo-code", element: <PromoCode/>},
      {path: "parents", element: <Parents/>},
      {path: "riders", element: <Riders/>},
      {path: "reports", element: <Reports/>},
      {path: "settings", element: <Settings/>},
    ]
  }
])

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
