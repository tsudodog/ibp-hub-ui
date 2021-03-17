import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from "./Home"

const Router = () => {


  return (
    <Switch>
      <Route path="/" component={Home}></Route>
    </Switch>
  )
}

export default Router