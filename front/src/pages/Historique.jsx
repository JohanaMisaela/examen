import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../assets/css/table.css'
function Historique() {
  return (
    <div>
            <Navbar/>
    <p className="sousheader" style={{
        marginLeft:"15%",
        marginBottom:"-6em",
        marginTop:"2em",  marginBottom:"2em",
    }}>
 Historique de commande
    </p>
    <div className="logincard" style={{
		border:"0"
	}}>
    <div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">Name</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Wins</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Draws</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Losses</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Total</a></div>
		</div>
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">Tom</div>
				<div class="table-data">2</div>
				<div class="table-data">0</div>
				<div class="table-data">1</div>
				<div class="table-data">5</div>
			</div>
			<div class="table-row">		
				<div class="table-data">Tom</div>
				<div class="table-data">2</div>
				<div class="table-data">0</div>
				<div class="table-data">1</div>
				<div class="table-data">5</div>
			</div>
			
		</div>	
	</div>
	<p className="paragraph" style={{
		margin:"2em"
	}}>
Voici Les Commandes Que Vous Avez Passées Depuis La Création De Votre Compte.</p>
    </div>
    <Footer />
    </div>
  )
}

export default Historique