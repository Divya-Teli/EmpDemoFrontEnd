import React from 'react';
import { Redirect, Route } from 'react-router-dom';



const PrivateRoutes = ({ component: Component, ...rest }) => {  
  var session_token=localStorage.getItem('email')

  return (
    <Route {...rest} render={props => (
     session_token !== null ? (
      < Component  {...props} />
      ) : (
            <Redirect to={{
              pathname: '/',
              }}
            />
          )
      )} 
    />
  )
};


export default PrivateRoutes;