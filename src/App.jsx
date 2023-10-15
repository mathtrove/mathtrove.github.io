import Home from './Home.jsx'
import About from './About.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx';
import Error from './Error.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from 'react-router-dom'
import './App.css'

const Dashboard = () =>{
  return(
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
    },
    {
      path:"/about",
      element:<About/>,
    }
  ],
    errorElement: <Error />,
  }
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
