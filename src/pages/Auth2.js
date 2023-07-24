import React from 'react'

const Auth2 = ({children}) => {
  if(!localStorage.getItem("token")){
    return children;
  }
}

export default Auth2