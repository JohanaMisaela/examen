import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
   faUserCircle, 
   faLocation,
   faCalendar,
   faTicket,
   faSmile,
   faPaperclip

} from '@fortawesome/free-solid-svg-icons'
function CardCompte() {
  return (
    <div style={{
        width:"80%",
        height:"500px",
        marginLeft:"10%",
        marginTop:"4em"     
    }}>
        <p className="paragraph" style={{
            color:"black",
            fontSize:"25px",
            marginLeft:"5%",
            fontFamily:" Verdana, Geneva, Tahoma, sans-serif",
            }}>Votre compte</p>
    <div className="col1" style={{
         width:"90%",
         height:"250px",
         marginLeft:"5%",
         display:"flex"
    }}>
        <div className="row"  style={{
         width:"30%",
         height:"250px",
         marginRight:"5%",
         border:"1px solid #ededed"
    }}>
       <FontAwesomeIcon icon={faUserCircle} style={{
        fontSize:"5em",
        marginTop:"0.5em"
       }}/>
       <p className="header" style={{
        textAlign:"center"
       }}>information</p>
        </div>
        <div className="row"  style={{
         width:"30%",
         height:"250px",
         marginRight:"5%",
         border:"1px solid #ededed"

    }}>
          <FontAwesomeIcon icon={faLocation} style={{
        fontSize:"5em",
        marginTop:"0.5em"
       }}/>
       <p className="header" style={{
        textAlign:"center"
       }}>Ajouter adresse
       </p>
       
        </div>
        <div className="row"  style={{
         width:"30%",
         height:"250px",
         border:"1px solid #ededed"

    }}>
          <FontAwesomeIcon icon={faCalendar} style={{
        fontSize:"5em",
        marginTop:"0.5em"
       }}/>
       <p className="header" style={{
        textAlign:"center"
       }}>Historique commande</p>
        
        </div>
    </div>
    <div className="col2" style={{
         width:"90%",
         height:"250px",
         marginLeft:"5%",
         display:"flex",
         marginTop:"5em"
    }}>
    <div className="row"  style={{
         width:"30%",
         height:"250px",
         marginRight:"5%",
         border:"1px solid #ededed"
    }}>
       <FontAwesomeIcon icon={faTicket} style={{
        fontSize:"5em",
        marginTop:"0.5em"
       }}/>
       <p className="header" style={{
        textAlign:"center"
       }}>Relévé de credit
       </p>
        </div>
        <div className="row"  style={{
         width:"30%",
         height:"250px",
         marginRight:"5%",
         border:"1px solid #ededed"

    }}>
       <FontAwesomeIcon icon={faPaperclip} style={{
        fontSize:"5em",
        marginTop:"0.5em"
       }}/>
       <p className="header" style={{
        textAlign:"center"
       }}>Pieces jointes
       </p>
        </div>
        <div className="row"  style={{
         width:"30%",
         height:"250px",
         border:"1px solid #ededed"

    }}>
       <FontAwesomeIcon icon={faSmile} style={{
        fontSize:"5em",
        marginTop:"0.5em"
       }}/>
       <p className="header" style={{
        textAlign:"center"
       }}> Déconnexion
       </p>
        </div>
    </div>
    </div>
  )
}

export default CardCompte