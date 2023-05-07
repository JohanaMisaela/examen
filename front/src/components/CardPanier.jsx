import React from 'react'

function CardPanier() {
  return (
    <div style={{
        width:"40em",
        height:"auto",
        border:"1px solid rgba(0,0,0,.1)",
        marginTop:"15em",
        marginLeft:"10em",
    marginBottom:"2em"
        
       
    }}>
        <div style={{
            display:"flex",
            marginTop:"2em"
        }}>
             <p className="paragraph" style={{
                marginLeft:"3%"

             }}>2 articles </p>
             <p className="paragraph" style={{
                marginLeft:"60%"
             }}>200$</p>
        </div>
        <div style={{
            display:"flex",
           
        }}>
             <p className="paragraph" style={{
                marginLeft:"3%"

             }}>Livraison</p>
             <p className="paragraph" style={{
                marginLeft:"60%"
             }}>Gratuite</p>
        </div>
        <hr style={{
                
                border:"1px solid rgba(0,0,0,.1)",
}}/>
       <div style={{
            display:"flex",
           
        }}>
             <p className="paragraph" style={{
                marginLeft:"37%",
                fontSize:"24px",
                color:"black"

             }}>TOTAL :</p>
             <p className="paragraph" style={{
                marginLeft:"10%",
                fontSize:"24px",
                color:"black"


             }}>200$</p>
             
        </div>
        <hr style={{
                
                border:"1px solid rgba(0,0,0,.1)",
}}/>
<button type="submit" style={{
    borderRadius:"7px",
    marginTop:"2em",
    backgroundColor:"black",
    padding:"1em",

}}>Passer à la caisse </button>
    </div>
  )
}

export default CardPanier