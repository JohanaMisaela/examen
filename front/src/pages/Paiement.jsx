import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Paiement() {
  return (
    <div>
        <Navbar/>
        <div className="pagetext">
        <h1 className="header">
        Paiement sécurisé
        </h1>
        <p className="paragraph">
        Paiement Sécurisé
Notre Moyen De Paiement Sécurisé
Avec SSL
<br />
Nous Acceptons :
<br />
Payement Espèce Au Magasin
<br />
Orange Money / Airtail Money / Mvola
<br />
Virement Bancaire
<br />
Chèque
<br />
Visa/Mastercard/Paypal
<br />


        </p>
        <p className="paragraph">A propos de ces services
        On passe les commandes au fournisseur des qu'on à reçu la paiement de la part du client

        </p>
        </div>
<Footer/>
    </div>
  )
}

export default Paiement