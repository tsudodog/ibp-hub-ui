// import "./styles.css";
import React from 'react'
import {useLocation} from 'react-router-dom'
import Router from './Router'
import {BrowserRouter} from "react-router-dom"

 const App = () => {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

export default App