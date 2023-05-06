import React from 'react'
import logo from '../assets/images/logo.jpeg';
import pay1 from '../assets/images/airtel.png'
import pay2 from '../assets/images/orange.png'
import pay3 from '../assets/images/mvola.png'
import pay4 from '../assets/images/master.png'
import pay5 from '../assets/images/paypal.png'
// import pay6 from '../assets/images/.png'
import {Link} from 'react-router-dom'


function Footer() {
    const date = Date.UTC
  return (
    <div className='footer'>
        <div className="footer1">
        <div className="logoFooter">
            <img src={logo} alt="" />
            <p>
            Service a pour but de faciliter les achats en ligne en Europe, Etats-unis et Chine pour la population à Madagascar. <br/>
            On commande les produis et on nous livre chez vous ou à nos point relais.
            </p>
        </div>
        </div>
        <div className="footer2">
        <div className="contact">
            <p><b>Adresse :</b>  162 LB Lazaret Nord - Rue François de Mahy Antsiranana MADAGASCAR </p>
            <p><b>Email :</b> <a href='mailto:contact@boutik-naka.com'>contact@boutik-naka.com</a> </p>
            <p><b>Numero :</b> (+261)32 55 504 44</p>
        </div>
        <div className="information">
            <h1>Information</h1>
            <div className="left">
           <Link to='/livraison' style={{
            textDecoration:"none"
           }}
           ><p>Livraison</p>
           </Link> 
           <Link to='/conditions' style={{
            textDecoration:"none"
           }}>
            <p>Conditions</p>
            </Link> 
           <Link to='/mentions'style={{
            textDecoration:"none"
           }}>
            <p>Mentions legales</p>
            </Link> 
           <Link to='/paiement' style={{
            textDecoration:"none"
           }}>
            <p>Paiement</p>
            </Link> 

            </div>  
        </div>
        <div class="parent">
<div class="div1"><img src={pay1} alt="" style={{width:"5em",height:"5em"}}/> </div>
<div class="div2"> <img src={pay2} alt="" style={{width:"5em",height:"5em"}}/></div>
<div class="div3"><img src={pay3} alt="" style={{width:"5em",height:"5em"}}/> </div>
<div class="div4"><img src={pay4} alt="" style={{width:"5em",height:"5em"}} /> </div>
<div class="div5"> <img src={pay5} alt="" style={{width:"5em",height:"5em"}}/></div>
<div class="div6"> <img src={pay1} alt="" style={{width:"5em",height:"5em"}}/></div>

</div>
        </div>
        <div className="copy">
            Réalisé par Ennio Johann et Johanna Misaela <br/>
            CopyRight 2023 {date}
        </div>
        
    </div>
  )
}

export default Footer