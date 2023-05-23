import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AdminNavbar from '../../components/AdminNavbar'
function AllCommand() {
  return (
    <div>
        <div>
            <AdminNavbar/>
    <p className="sousheader" style={{
        marginLeft:"15%",
        marginBottom:"-6em",
        marginTop:"2em",  marginBottom:"2em",
    }}>
Tout les commandes    </p>
<button type='submit' style={{
        width:"200px",
        borderRadius:"7px",
        backgroundColor:"grey",
        padding:"1.5em",
        marginTop:"1em",
        marginBottom:"1em",

     }}>Tout </button>  
<button type='submit' style={{
        width:"200px",
        borderRadius:"7px",
        backgroundColor:"orange",
        padding:"1.5em",
        marginTop:"1em",
        marginBottom:"1em",
        marginLeft:"1em"

     }}>En cours</button>   
     <button type='submit' style={{
        width:"200px",
        borderRadius:"7px",
        backgroundColor:"green",
        padding:"1.5em",
        marginTop:"1em",
        marginBottom:"1em",
        marginLeft:"1em"

     }}>Livré </button>  
    <div className="logincard" style={{
		border:"0"
	}}>
 

    <div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">Libélé</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Prix</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Quantité</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Site</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Prix Unitaire</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Total</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Suivi</a></div>

        </div>
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">Tom</div>
				<div class="table-data">2</div>
				<div class="table-data">0</div>
				<div class="table-data">1</div>
				<div class="table-data">5</div>
				<div class="table-data">5</div>
				<div class="table-data">5</div>

			</div>
			<div class="table-row">		
				<div class="table-data">Tom</div>
				<div class="table-data">2</div>
				<div class="table-data">0</div>
				<div class="table-data">1</div>
				<div class="table-data">5</div>
				<div class="table-data">5</div>
				<div class="table-data">5</div>

			</div>
			
		</div>	
	</div>
	    </div>
    <Footer />
    </div>
    </div>
  )
}

export default AllCommand