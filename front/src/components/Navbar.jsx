import React from 'react'
import logo from '../assets/images/logo.jpeg'
import Searchbar from '../components/Searchbar'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHouseChimney , 
    faMoneyBillTransfer, 
    faHouseCrack, 
    faCartShopping, 
    faHeart, 
    faGripLinesVertical,
    faLink ,
    faCodeCompare

} from '@fortawesome/free-solid-svg-icons'
import '../assets/css/style.css'
import Introduction from './Introduction'
function Navbar() {
  return (
    <div>
        <div className="topnavbar" style={{
            width:"30em",
            height:"50px",
            backgroundColor:"white",
            marginLeft:"100em",
            display:"flex",
            marginTop:"2em"
        }}>
            <FontAwesomeIcon icon={faLink} style={{
                        marginRight:"0.5em", 
                        fontSize:"20px",
                        color:"rgb(114, 110, 110)",
                        marginLeft:"8em"


                        }}/> 
            <FontAwesomeIcon icon={faGripLinesVertical} style={{
                        marginRight:"0.5em", 
                        fontSize:"20px",
                        color:"rgb(114, 110, 110)",
                        marginLeft:"0.5em"


                        }}/>
            <p className="paragraph" style={{
                marginTop:"-0.1em"
            }}>Compare</p>
            <FontAwesomeIcon icon={faCodeCompare} style={{
                        marginRight:"0.5em", 
                        fontSize:"20px",
                        color:"rgb(114, 110, 110)",
                        marginLeft:"0.5em"


                        }}/>

        </div>
        <div className="navbar">
            <div className="logo">
                <Link to='/' >
                <img src={logo} style={{width:"100%"}}/></Link>
            </div>
            <div className="menu">
                <ul className='menu1'>
                    <li>
                        <Link to='/' style={{
                        textDecoration:"none",
                        color:"rgb(114, 110, 110)"

                    }}>
                    <FontAwesomeIcon icon={faHouseChimney} style={{
                        marginRight:"0.5em", 
                        fontSize:"20px"
                        }}/>
                     Acceuil
                     </Link>
                    </li>
                    <li>
                    <Link to='/' style={{
                        textDecoration:"none",
                        color:"rgb(114, 110, 110)"

                    }}>
                    <FontAwesomeIcon icon={faMoneyBillTransfer} style={{
                        marginRight:"0.5em", 
                        fontSize:"20px"
                        }}/>
                     Faire un devis
                     </Link>

                    </li>
                    <li>
                    <Link to='/' style={{
                        textDecoration:"none",
                        color:"rgb(114, 110, 110)"
                    }}>
                    <FontAwesomeIcon icon={faHouseCrack} style={{
                        marginRight:"0.5em", 
                        fontSize:"20px"
                        }}/>
                     Place de Marché
                     </Link>

                    </li>
                </ul>
                <ul className='user'>
                    <li> <Link to='/auth' style={{
                        textDecoration:"none",
                        color:"#c02b27"
                    }}>
                    Connexion 
                    </Link>
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
        <Searchbar />
        {/* <Introduction /> */}
    </div>
  )
}

export default Navbar