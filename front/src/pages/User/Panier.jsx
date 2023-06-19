import React from 'react'
import Navbar from '../../components/User/Navbar'
import Footer from '../../components/All/Footer'
import PanierList from '../../components/User/PanierList'
import CardPanier from '../../components/User/CardPanier'

function Panier() {
  return (
    <div>
        <Navbar />
        <div style={{
            display:"flex"
        }}>
            <PanierList />
            <CardPanier />
        </div>
        
        <Footer />
    </div>
  )
}

export default Panier