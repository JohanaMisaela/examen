import React from 'react'
import logobnk from '../assets/images/logobnk.jpeg'
function Introduction() {
  return (
    <div style={{
        width:"80em",
        marginTop:"2em",
        height:"200px",
        marginLeft:"40em",
        marginBottom:'3em',


    }}>
        <div className="logobnk" style={{
            width:"5em",
            height:"5em",
            marginTop:'5em',
            marginBottom:'3em',
            marginLeft:"45%"
        }}>
            <img src={logobnk} alt=""  style={{
            width:"100%",
            height:"100%"
        }}/>
        </div>
        <h1 className="header" style={{
        textAlign:"center"
        }}>BOUTIK'NAKA - SERVICE D'ACHAT EN LIGNE</h1>
        <p className="paragraph"  style={{
        textAlign:"center",
        
        }}>
        Boutik'nakà est un service qui consiste à facilité la population de Madagascar d'acheter des produits ( sur Amazon, Ebay, Ali express, piecesauto 24 ,.. etc) et des Services en ligne (Votre abonnement sur des compte payent et des fichiers ). N’hésiter pas à consulter et à commandé les produits dans notre catalogue.
        </p>
    </div>
  )
}

export default Introduction