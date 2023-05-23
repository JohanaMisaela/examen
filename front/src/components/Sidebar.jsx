import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAdd, 
    faLaptop, 
    faMobile, 
    faMicrochip, 
    faShirt,
    faTShirt,
    faChildDress,
    faBed,
    faChair,
    faTableCells
} from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
   
  return (
    
    <div className='sidebar'>
       
        <div className="categorie"><p style={{
            fontSize:"20px",
            color:"white"
        }}>Toutes Categories</p></div>
        <div className="listCategorie">
            <div className="cat">
                <FontAwesomeIcon icon={faMicrochip} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                HighTech
            </div> 
            <div className="pannel">
                <div className="sousCat">
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faMobile} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Mobile
                </div>
               
            </div>
            <div className="cat">
                <FontAwesomeIcon icon={faShirt} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                Vetements 
            </div> 
            <div className="pannel">
                <div className="sousCat">
                    <FontAwesomeIcon icon={faTShirt} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>T-Shirt
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faChildDress} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Dress
                </div>
                
            </div>
            <div className="cat">
                <FontAwesomeIcon icon={faBed} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                Meuble
            </div> 
            <div className="pannel">
                <div className="sousCat">
                    <FontAwesomeIcon icon={faTableCells} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Table
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faChair} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>chair
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faBed} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Bed
                </div>
               
            </div>
    
        </div>
    
    </div>
  )
}

export default Sidebar