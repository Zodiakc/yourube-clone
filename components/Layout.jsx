import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <div style={{display: "flex"}}>
            <Navbar/>
            {children}
        </div>
    </div>
  )
}

export default Layout