import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact'
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
    },
    {
      path: "/frvjne57huhvbuthi86ibjfg",
      element: <Contact />
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
