import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Information() {
  return (
    <div>
        <Navbar/>
    <p className="sousheader" style={{
        marginLeft:"15%",
        marginBottom:"-6em",
        marginTop:"2em"
    }}>
 Votre compte
    </p>
     <div className='logincard'>
        <form>
            <div style={{
                display:"flex",
                flexDirection:"row",
                paddingTop:"5em"
                
            }}>
                <label htmlFor="nom" style={{
                    fontSize:"30px",
                    color:"rgb(114, 110, 110)",
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    marginLeft:"13em"
                }}>Nom : </label>
                <input type="text" name="" id=""  style={{
                    width:"40em",
                    height:"40px",
                    marginLeft:"13.5em",
                    border:"1px solid #ededed"
                    
                }}/>
            </div>
            <div style={{
                display:"flex",
                flexDirection:"row",
                paddingTop:"5em"
                
            }}>
                <label htmlFor="nom" style={{
                    fontSize:"30px",
                    color:"rgb(114, 110, 110)",
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    marginLeft:"13em"
                }}>Prénom :</label>
                <input type="text" name="" id=""  style={{
                    width:"40em",
                    height:"40px",
                    marginLeft:"11em",
                    border:"1px solid #ededed"
                    
                }}/>
            </div>
            <div style={{
                display:"flex",
                flexDirection:"row",
                paddingTop:"5em"
                
            }}>
                <label htmlFor="email" style={{
                    fontSize:"30px",
                    color:"rgb(114, 110, 110)",
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    marginLeft:"13em"
                }}>Email : </label>
                <input type="text" name="" id=""  style={{
                    width:"40em",
                    height:"40px",
                    marginLeft:"13.5em",
                    border:"1px solid #ededed"
                    
                }}/>
            </div>
            <div style={{
                display:"flex",
                flexDirection:"row",
                paddingTop:"5em"
                
            }}>
                <label htmlFor="email" style={{
                    fontSize:"30px",
                    color:"rgb(114, 110, 110)",
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    marginLeft:"13em"
                }}>Mot de passe : </label>
                <input type="password" name="" id=""  style={{
                    width:"40em",
                    height:"40px",
                    marginLeft:"5em",
                    border:"1px solid #ededed"
                }}/>
                
            </div> 
            <div style={{
                display:"flex",
                flexDirection:"row",
                paddingTop:"5em"
                
            }}>
            <label htmlFor="email" style={{
                    fontSize:"30px",
                    color:"rgb(114, 110, 110)",
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    marginLeft:"13em"
                }}>Nouveau pwd : </label>
                <input type="password" name="" id=""  style={{
                    width:"40em",
                    height:"40px",
                    marginLeft:"5em",
                    border:"1px solid #ededed"
                }}/></div>
            <button type="submit" style={{
                padding:"1.5em",
                marginLeft:"17em",
                borderRadius:"7px",
                backgroundColor:"black",
                marginTop:"2em",
                marginBottom:"5em"
            }}>
                Sauvegarder
            </button>
        </form>


    </div>
    <Footer />
</div>
  )
}

export default Information