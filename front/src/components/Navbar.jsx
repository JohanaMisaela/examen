import React from 'react'
import logo from '../assets/images/logo.jpeg'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney , faMoneyBillTransfer, faHouseCrack, faCartShopping, faHeart, faGripLinesVertical} from '@fortawesome/free-solid-svg-icons'
import '../assets/css/style.css'
function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="logo">
                <img src={logo} style={{width:"100%"}}/>
            </div>
            <div className="menu">
                <ul className='menu1'>
                    <li>
                    <FontAwesomeIcon icon={faHouseChimney} style={{
                        marginRight:"0.5em", 
                        fontSize:"20px"
                        }}/>
                     Acceuil
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faMoneyBillTransfer} style={{
                        marginRight:"0.5em", 
                        fontSize:"20px"
                        }}/>
                     Faire un devis
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faHouseCrack} style={{
                        marginRight:"0.5em", 
                        fontSize:"20px"
                        }}/>
                     Place de Marché
                    </li>
                </ul>
                <ul className='user'>
                    <li>
                        Connexion 
                        <FontAwesomeIcon icon={faGripLinesVertical} style={{
                            marginRight:"0.5em", 
                            marginLeft:"0.5em"
                            }}/>
                        Mon compte
                    </li>
                </ul>
                <ul className='icone'>
                    <li>
                        <Link >
                            <FontAwesomeIcon icon={faHeart} style={{
                                color:"rgb(114, 110, 110)",
                                fontSize:"20px",
                                marginRight:"0.5em", 
                                marginLeft:"0.5em",
                                float:'inline-end'
                                }}/>
                        </Link>
                        <Link >
                            <FontAwesomeIcon icon={faCartShopping} style={{
                                color:"rgb(114, 110, 110)",
                                fontSize:"20px",
                                marginRight:"0.5em", 
                                marginLeft:"0.5em",
                                }}
                                />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar