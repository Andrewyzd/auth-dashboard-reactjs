import React, { useState } from 'react';
import './app.css'
import './App.scss'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import MainContent from './Components/Scenes/Content.jsx'
import Team from './Components/Scenes/Team.jsx'
import Contacts from './Components/Scenes/Contacts.jsx'
import Invoices from './Components/Scenes/Invoices.jsx'
import Form from './Components/Scenes/Form.jsx'
import Calendar from './Components/Scenes/Calendar.jsx'
import Bar from './Components/Scenes/Bar.jsx'
import Pie from './Components/Scenes/Pie.jsx'
import Line from './Components/Scenes/Line.jsx'
import Geography from './Components/Scenes/Geography.jsx'
import Faq from './Components/Scenes/Faq.jsx'

//Import React router dom
import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

//Lets create a router
const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/dashboard',
    element: <Dashboard/>,
    children: [
      {
        path: 'mainContent',
        element: <MainContent />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'invoices',
        element: <Invoices />,
      },
      {
        path: 'form',
        element: <Form />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'bar',
        element: <Bar />,
      },
      {
        path: 'pie',
        element: <Pie />,
      },
      {
        path: 'line',
        element: <Line />,
      },
      {
        path: 'geography',
        element: <Geography />,
      },
      {
        path: 'faq',
        element: <Faq />,
      },
      // Add other nested routes here if needed
    ],
  },
])


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function authentication(){
    if(!isLoggedIn){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
    console.log(isLoggedIn);
  }

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
