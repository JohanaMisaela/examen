import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping , faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import C2 from '../assets/images/vista.png'
function ViewItem() {
  return (
    <div className='cardlist'>
        <div className="filter"></div>
        
        <div className="container1" style={{ marginTop:'2em'}}>
      <div className="images" >
        <img className='img1' src={C2} />
      </div>
   
      <div className="product">
        <p className='header'>Hot pot serie de 03pcs</p>
        <h1 className='sousheader'>ALIEXPRESS</h1>
        <h2 className='paragraph'>100$</h2>
        <p className="desc paragraph">
        Hot pot serie de 03pcs 2,5/1,5/1l (12sets) <br />
        Isolation thermique hautement efficace <br />
        Pot de revêtement intérieur en acier inoxydable <br />
        Convient pour une utilisation chaude et froide <br />
        Peut garder les aliments chauds ou froids plus longtemps
            </p>
        <div className="buttons" >
          <button className="add">Add to Cart
          </button>
          <button className="like"><span>
          <FontAwesomeIcon icon={faCartShopping} style={{
                   fontSize:"15px"
                }}/>
            </span></button>
        </div>
        <div className="buttons" >
          <button className="add1">Proceder au paiement 
          </button>
          <button className="like1"><span>
          <FontAwesomeIcon icon={faMoneyBill} style={{
                   fontSize:"15px"
                }}/>
            </span></button>
        </div>
     
    </div>
        </div>
    </div>
  )
}

export default ViewItem