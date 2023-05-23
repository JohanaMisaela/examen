import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'

function Livraison() {
  return (
    <div >
        <Navbar/>
    
        <div className='pagetext'>
    <h1 className="header">LIVRAISON</h1>
        <p className="sousheader">Votre Colis</p>
        <p className="paragraph">
        Les colis sont généralement expédiés dans les 2 jours suivant la réception en FRANCE/ Etats Unis de votre produit chez les fournisseur que vous avez choisi lors de la commande et sont expédiés par BOPST INTERNATIONAL (Livraison à Madagascar 2 à 4 semaine) avec lien de suivi à la demande . Si vous préférez une livraison par DHL plus rapide (Livraison à Madagascar 1 à 2 semaine), des frais supplémentaires seront appliqués. Veuillez nous contacter avant de choisir cette méthode de livraison DHL, car par défaut la livraison s'effectue par BPOST INTERNATIONALE. Quel que soit le choix d'expédition que vous fassiez, nous vous fournirons un lien pour suivre votre colis en ligne à la demande.
<br/>
Les frais d'expédition comprennent les frais de manutention et d'emballage, ainsi que les frais d'expédition. Les frais de manutention sont fixes, tandis que les frais de transport varient en fonction du poids total de l'envoi.  Nous ne pouvons pas grouper deux commandes distinctes passées séparément et des frais de livraison s'appliqueront à chacune d'entre elles. Votre colis sera expédié à vos risques et périls, mais un soin particulier est apporté à la protection des objets fragiles.
<br/>
Les boîtes sont largement dimensionnées et vos objets bien protégés.
        </p>

<p className="sousheader">RETOUR</p>
<p className="paragraph">
Est Il Possible De Retourner Des Produits Au Fournisseur?
<br/>
Le retour est possible mais si seulement le fournisseur que vous avez commande le produit accepte le retour et la date de limite de retour du fournisseur est encore en vigueur. Le retour s'effectue par DHL uniquement et le frais de retour est à la charge du client. 
   
</p></div>
     <Footer />
    </div>
  )
}

export default Livraison