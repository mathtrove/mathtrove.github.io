import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact'
import Topics from './pages/Topics.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx';
import Error from './Error.jsx';


import TrigPage from './pages/Topics_Pages/Trig.jsx'
import DiscretePage from './pages/Topics_Pages/Discrete.jsx'
import CalculusPage from './pages/Topics_Pages/Calculus.jsx'
import LogPage from './pages/Topics_Pages/Log.jsx'
import GeomPage from './pages/Topics_Pages/Geom.jsx'
import NumbThPage from './pages/Topics_Pages/NumbTh.jsx'
import AlgebraPage from './pages/Topics_Pages/Algebra.jsx'
import ArithPage from './pages/Topics_Pages/Arith.jsx'
import VectPage from './pages/Topics_Pages/Vectors.jsx'

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
    },
    {
      path: "/topics",
      element: <Topics/>,
    },
    {
      path: "/topics/trig",
      element: <TrigPage/>
    },
    {
      path: "/topics/discrete",
      element: <DiscretePage/>
    },
    {
      path: "/topics/calculus",
      element: <CalculusPage/>
    },
    {
      path: "/topics/logarithm",
      element: <LogPage/>
    },
    {
      path: "/topics/geometry",
      element: <GeomPage/>
    },
    {
      path: "/topics/number-theory",
      element: <NumbThPage/>
    },
    {
      path: "/topics/algebra",
      element: <AlgebraPage/>
    },
    {
      path: "/topics/arithmetic",
      element: <ArithPage/>
    },
    {
      path: "/topics/vectors",
      element: <VectPage/>
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
