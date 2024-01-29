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
import Location from './components/location/Location';
import Users from './components/users/Users';
import Payments from './components/payments/Payments';
import Fair from './components/fair/Fair';
import ReviewAndRatings from './components/review-and-ratings/ReviewAndRatings';

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
      {path: "users", element: <Users/>},
      {path: "parents", element: <Parents/>},
      {path: "riders", element: <Riders/>},
      {path: "payments", element: <Payments/>},
      {path: "fair", element: <Fair/>},
      {path: "review-and-ratings", element: <ReviewAndRatings/>},
      {path: "reports", element: <Reports/>},
      {path: "settings", element: <Settings/>},
      {path: "location", element: <Location/>},
    ]
  }
])

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
