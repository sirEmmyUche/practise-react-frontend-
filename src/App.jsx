import { useState } from 'react'
import { createBrowserRouter,createRoutesFromElements,
  Route,Routes,RouterProvider,} from 'react-router-dom';
import Home from './pages/home.jsx'
import PaginatedPage from './pages/paginatedPage.jsx';
import PaginatedPage2 from './pages/paginatedPage2.jsx';
import './App.css'

const router = createBrowserRouter([{path:"*", Component:Root}]);

function Root(){
  return(
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/PaginatedPage' element = {<PaginatedPage/>}/>
      <Route path='/PaginatedPage2' element = {<PaginatedPage2/>}/>
    </Routes>
  )
}

function App(){
  return <RouterProvider router={router} />   
}

export default App
