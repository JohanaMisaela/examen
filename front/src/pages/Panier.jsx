import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PanierList from '../components/PanierList'
import CardPanier from '../components/CardPanier'

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