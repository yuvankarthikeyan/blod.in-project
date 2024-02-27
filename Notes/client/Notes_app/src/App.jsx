import { createBrowserRouter ,RouterProvider,Route , Link } from "react-router-dom"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";
import ExistingNotes from "./pages/ExistingNotes";
import EditNotes from "./pages/EditNotes";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/register",
    element : <Register/>
  },
])


function App() {
  

  return (
    <div className=" relative z-0 back bg-sky-800">
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
