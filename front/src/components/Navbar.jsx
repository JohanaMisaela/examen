import React from 'react'
import logo from '../assets/images/logo.jpeg'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney , faMoneyBillTransfer, faHouseCrack, faCartShopping, faHeart} from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="menu">
                <ul>
                    <li>
                    <FontAwesomeIcon icon={faHouseChimney}/>
                     <Link to="">Acceuil</Link>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faMoneyBillTransfer}/>
                     <Link to="">Faire un devis</Link>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faHouseCrack}/>
                     <Link to="">Place de Marché</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link>Connexion</Link>/
                        <Link>Mon compte</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link >
                            <FontAwesomeIcon icon={faHeart}/>
                        </Link>
                        <Link >
                            <FontAwesomeIcon icon={faCartShopping}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar