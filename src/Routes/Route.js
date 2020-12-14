import React from 'react'
import { Switch ,Route } from 'react-router-dom'
import DisplayEmpList from '../component/DisplayEmpList'
import Login from '../component/Login'

import PrivateRoutes from '../Routes/PrivateRoutes.js'

const Routes=()=> {
    return (
      <Switch>
          <Route exact path="/" component={Login}/>
   <PrivateRoutes  path="/home" component={DisplayEmpList}/> 
  
    

      </Switch>
      
    )
}
export default Routes
