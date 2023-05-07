import React from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Footer from '../components/Footer'
import Login from '../components/Login'

function Auth() {
  return (
    <div>
        <Navbar />
        <Login />
        <Footer />
    </div>
  )
}

export default Auth