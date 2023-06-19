import React , {useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faAdd,
    faMinus,
    faTrash
} from '@fortawesome/free-solid-svg-icons'
import Hot from '../../assets/images/vista.png'
import { Link } from 'react-router-dom'
function PanierList() {
    const [nombre, setNombre] = useState(1)
    const incremente = () =>{
        var nb = nombre +1 ;
        setNombre(nb)
       }
       const decremente = () =>{
        var nb = nombre -1 ;
        setNombre(nb)
       }
  return (
    <div>
    <div style={{
        width:"60em",
        height:"auto",
        marginTop:"10em",
        marginLeft:"10em"
    }}>
        <div >
        <p className="paragraph" style={{
            marginLeft:"10%"
        }}>Pannier</p>
        <div className="listPanier" style={{
            width:"80%",
            marginLeft:"10%",
            backgroundColor:"white",
            height:"auto",
            marginBottom:"2em",

        }}>
            <div className="panierproduct" style={{

                display:"flex"
            }}>
                <div className="image" style={{
                    width:"150px",
                    height:"150px",
                    backgroundColor:"red",
                }}>
<img src={Hot} alt="" style={{
    width:"100%",
    height:"100%",
    border:"1px solid rgba(0,0,0,.1)",

}}/>
                </div>
                <div style={{
                    marginLeft:"2em"
                }}>
                <p className="paragraph">Hot pot serie de 03pcs</p>
                <p className="paragraph">100$</p> 
                <div style={{
                    display:"flex",
                }}>
                <button type="submit" onClick={incremente} style={{
                    width:"2.5em",
                    height:"3em",
                    textAlign:"center"
                }}><FontAwesomeIcon icon={faAdd}/></button>
                <p className="paragraph" style={{
                    fontSize:"20px",
                    marginTop:"0.5em",
                    marginLeft:"0.5em",
                    marginRight:"0.5em",
                }}>{nombre}</p>
                <button type="submit" onClick={decremente} style={{
                    width:"2.5em",
                    height:"3em",
                    textAlign:"center"
                }}><FontAwesomeIcon icon={faMinus}/></button>
                <p className="paragraph" style={{
                       marginTop:"0.5em",
                       marginLeft:"1em",

                }}>Total:</p>
                <button type="submit"  style={{
                    width:"2.5em",
                    height:"2em",
                    textAlign:"center",
                    marginLeft:"80%",
                    fontSize:"20px"
                }}><FontAwesomeIcon icon={faTrash}/></button>
         
                </div>
                </div>
                
            </div>
            <hr  style={{
                width:"80%",
                marginLeft:"4em",
                marginTop:"2em",
                border:"1px solid rgba(0,0,0,.1)",
                marginBottom:"2em",
}}/>
           <div className="panierproduct" style={{

display:"flex"
}}>
<div className="image" style={{
    width:"150px",
    height:"150px",
    backgroundColor:"red",
}}>
<img src={Hot} alt="" style={{
width:"100%",
height:"100%",
border:"1px solid rgba(0,0,0,.1)",

}}/>
</div>
<div style={{
    marginLeft:"2em"
}}>
<p className="paragraph">Hot pot serie de 03pcs</p>
<p className="paragraph">100$</p> 
<div style={{
    display:"flex",
}}>
<button type="submit" onClick={incremente} style={{
    width:"2.5em",
    height:"3em",
    textAlign:"center"
}}><FontAwesomeIcon icon={faAdd}/></button>
<p className="paragraph" style={{
    fontSize:"20px",
    marginTop:"0.5em",
    marginLeft:"0.5em",
    marginRight:"0.5em",
}}>{nombre}</p>
<button type="submit" onClick={decremente} style={{
    width:"2.5em",
    height:"3em",
    textAlign:"center"
}}><FontAwesomeIcon icon={faMinus}/></button>
<p className="paragraph" style={{
       marginTop:"0.5em",
       marginLeft:"1em",

}}>Total:</p>
<button type="submit"  style={{
    width:"2.5em",
    height:"2em",
    textAlign:"center",
    marginLeft:"80%",
    fontSize:"20px"
}}><FontAwesomeIcon icon={faTrash}/></button>

</div>
</div>

</div>
<hr  style={{
width:"80%",
marginLeft:"4em",
marginTop:"2em",
border:"1px solid rgba(0,0,0,.1)",
marginBottom:"2em",
}}/>

        </div>
        </div>
        
    </div>
    <button type="submit" style={{
        borderRadius:"7px",
        marginTop:"2em",
        backgroundColor:"black",
        padding:"1.5em",
        marginLeft:"-20em"
    
    }}><Link to='/' style={{
        textDecoration:"none",
        color:"white"
    }} >Continuer mes achats</Link></button>
    </div>
  )
}

export default PanierList