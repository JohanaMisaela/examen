import React from 'react';
import produit from '../assets/images/vista.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faHeart, faEye} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Cardlist() {
  return (
    <div className='cardlist'>
        <div className="filter">
           
        </div>
        <div className="card">
            <div className="produitPicture">
              <Link to='/view'><img src={produit} alt="" /></Link>  
            </div>
            <div className="produitInfo">
                <p className="header">Hot pot serie de 03pcs</p>
                <p className="paragraph">ALIEXPRESS</p>
                <p className="sousheader">100$</p>
                <p className="paragraph">Hot pot serie de 03pcs 2,5/1,5/1l (12sets) <br />
                Isolation thermique hautement efficace <br />
Pot de revêtement intérieur en acier inoxydable <br />
Convient pour une utilisation chaude et froide <br />
Peut garder les aliments chauds ou froids plus longtemps
                
                </p>
            </div>
            <div className="produitAction">
                <p className="paragraph" style={{
                    marginLeft:"1em",
                    marginTop:"2em"
                }}>Avalability : </p>
                <div className="buttonAdd">
                    <FontAwesomeIcon icon={faCartShopping} style={{
                        color:"white",
                        fontSize:"30px",
                        marginRight:"0.5em", 
                        marginLeft:"1.2em",

                    }}/> <p className="buttonText">
                    Add to chart

                    </p>
                </div>
                <div className="act">
                    <div className='actions'>
                    <FontAwesomeIcon icon={faHeart} style={{
                     color:"rgb(114, 110, 110)",
                     fontSize:"30px",
                     marginRight:"0.5em",  
                }}/> <p style={{
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    color:"rgb(114, 110, 110)",
                    fontSize:"20px",
                    marginTop:"-0.5px"
                }}>Add to WishList</p> 
                    </div>
                    <div className='actions'>
                    <FontAwesomeIcon icon={faEye} style={{
                     color:"rgb(114, 110, 110)",
                     fontSize:"30px",
                     marginRight:"0.5em",  
                }}/> <p style={{
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    color:"rgb(114, 110, 110)",
                    fontSize:"20px",
                    marginTop:"-0.5px"
                }}>View More</p> 
                    </div>

                
                

                </div>
            </div>

        </div>
        <div className="card">
            <div className="produitPicture">
                <img src={produit} alt="" />
            </div>
            <div className="produitInfo">
                <p className="header">Hot pot serie de 03pcs</p>
                <p className="paragraph">ALIEXPRESS</p>
                <p className="sousheader">100$</p>
                <p className="paragraph">Hot pot serie de 03pcs 2,5/1,5/1l (12sets) <br />
                Isolation thermique hautement efficace <br />
Pot de revêtement intérieur en acier inoxydable <br />
Convient pour une utilisation chaude et froide <br />
Peut garder les aliments chauds ou froids plus longtemps
                
                </p>
            </div>
            <div className="produitAction">
                <p className="paragraph" style={{
                    marginLeft:"1em",
                    marginTop:"2em"
                }}>Avalability : </p>
                <div className="buttonAdd">
                    <FontAwesomeIcon icon={faCartShopping} style={{
                        color:"white",
                        fontSize:"30px",
                        marginRight:"0.5em", 
                        marginLeft:"1.2em",

                    }}/> <p className="buttonText">
                    Add to chart

                    </p>
                </div>
                <div className="act">
                    <div className='actions'>
                    <FontAwesomeIcon icon={faHeart} style={{
                     color:"rgb(114, 110, 110)",
                     fontSize:"30px",
                     marginRight:"0.5em",  
                }}/> <p style={{
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    color:"rgb(114, 110, 110)",
                    fontSize:"20px",
                    marginTop:"-0.5px"
                }}>Add to WishList</p> 
                    </div>
                    <div className='actions'>
                    <FontAwesomeIcon icon={faEye} style={{
                     color:"rgb(114, 110, 110)",
                     fontSize:"30px",
                     marginRight:"0.5em",  
                }}/> <p style={{
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    color:"rgb(114, 110, 110)",
                    fontSize:"20px",
                    marginTop:"-0.5px"
                }}>View More</p> 
                    </div>

                
                

                </div>
            </div>

        </div>
        <div className="card">
            <div className="produitPicture">
                <img src={produit} alt="" />
            </div>
            <div className="produitInfo">
                <p className="header">Hot pot serie de 03pcs</p>
                <p className="paragraph">ALIEXPRESS</p>
                <p className="sousheader">100$</p>
                <p className="paragraph">Hot pot serie de 03pcs 2,5/1,5/1l (12sets) <br />
                Isolation thermique hautement efficace <br />
Pot de revêtement intérieur en acier inoxydable <br />
Convient pour une utilisation chaude et froide <br />
Peut garder les aliments chauds ou froids plus longtemps
                
                </p>
            </div>
            <div className="produitAction">
                <p className="paragraph" style={{
                    marginLeft:"1em",
                    marginTop:"2em"
                }}>Avalability : </p>
                <div className="buttonAdd">
                    <FontAwesomeIcon icon={faCartShopping} style={{
                        color:"white",
                        fontSize:"30px",
                        marginRight:"0.5em", 
                        marginLeft:"1.2em",

                    }}/> <p className="buttonText">
                    Add to chart

                    </p>
                </div>
                <div className="act">
                    <div className='actions'>
                    <FontAwesomeIcon icon={faHeart} style={{
                     color:"rgb(114, 110, 110)",
                     fontSize:"30px",
                     marginRight:"0.5em",  
                }}/> <p style={{
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    color:"rgb(114, 110, 110)",
                    fontSize:"20px",
                    marginTop:"-0.5px"
                }}>Add to WishList</p> 
                    </div>
                    <div className='actions'>
                    <FontAwesomeIcon icon={faEye} style={{
                     color:"rgb(114, 110, 110)",
                     fontSize:"30px",
                     marginRight:"0.5em",  
                }}/> <p style={{
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    color:"rgb(114, 110, 110)",
                    fontSize:"20px",
                    marginTop:"-0.5px"
                }}>View More</p> 
                    </div>

                
                

                </div>
            </div>

        </div>
    </div>
  )
}

export default Cardlist