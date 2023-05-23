import React, {  useState} from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../src/axios/instance';

function CreateCompte() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const signup = async (e) => {
        e.preventDefault();
        if (!email || !name || !password) {
          alert("champ requis")
          return;
        }
        try {
          const data = { email, password, name }
          console.log(data);
          const userInfo = await axiosInstance.post('/auth/login', data);
          const user = userInfo.data;
          console.log(user.user)
          const status = user.user.isAdmin;
          window.location.href = "/userMain"
        } catch (err) {
          alert("invalid credentialls")
          const error = typeof(error.response.data.message) === 'string' ? error.response.data.message : error.response.data.message[0]
          
          console.error(err)
        }
    
  }  

  return (
    <div>
    <p className="sousheader" style={{
        marginLeft:"15%",
        marginBottom:"-6em",
        marginTop:"2em"
    }}>
Creer votre compte
    </p>
     <div className='logincard'>
        <form onSubmit={signup}>
            <div style={{
                display:"flex",
                flexDirection:"row",
                paddingTop:"5em"
                
            }}>
                <label htmlFor="name" style={{
                    fontSize:"30px",
                    color:"rgb(114, 110, 110)",
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    marginLeft:"13em"
                }}>Nom : </label>
                <input type="text" name="name" id="name"  style={{
                    width:"40em",
                    height:"40px",
                    marginLeft:"13.5em",
                    border:"1px solid #ededed"
                    
                }}
                onChange={(e) => setName(e.target.value)}
                />
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
                <input type="text" name="email" id=""  style={{
                    width:"40em",
                    height:"40px",
                    marginLeft:"13.5em",
                    border:"1px solid #ededed"
                    
                }}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div style={{
                display:"flex",
                flexDirection:"row",
                paddingTop:"5em"
                
            }}>
                <label htmlFor="password" style={{
                    fontSize:"30px",
                    color:"rgb(114, 110, 110)",
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    marginLeft:"13em"
                }}>Mot de passe : </label>
                <input type="password" name="password" id=""  style={{
                    width:"40em",
                    height:"40px",
                    marginLeft:"5em",
                    border:"1px solid #ededed"
                }}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div> 
            <button type="submit" style={{
                padding:"1.5em",
                marginLeft:"17em",
                borderRadius:"7px",
                backgroundColor:"black",
                marginTop:"2em"
            }}
            value='Creer compte'
            >
                
            </button>
        </form>

<hr style={{
width:"80%",
marginLeft:"7em",
marginTop:"2em",
border:"1px solid rgba(0,0,0,.1)",
marginBottom:"2em",
}}/>
<p className="paragraph" style={{
marginLeft:"1em"
}}>Login with</p>
<p className="header" style={{
    textAlign:"center",
    textTransform:"uppercase",
    color:"black"
}}>Utiliser votre compte Amazon</p>
<p className="paragraph" style={{
    marginLeft:"1em",
    marginLeft:"1em"
}}>
Avec Amazon Pay et Connexion avec Amazon,
vous pouvez facilement vous connecter et utiliser les informations d’expédition et de paiement stockées dans votre compte Amazon pour passer une commande dans cette boutique.
</p>
<hr style={{
width:"80%",
marginLeft:"7em",
marginTop:"3em",
border:"1px solid rgba(0,0,0,.1)",
marginBottom:"2em",
}}/>
<p className="paragraph" style={{
                textAlign:"center",
                marginTop:"3em",
                marginBottom:"3em"
            }}>Vous avez deja un compte ? 
            <Link to='/auth' style={{
                    textDecoration:"none",
                    color:"rgb(114, 110, 110)"
                }}> Connectez-vous</Link></p>
    </div>
</div>
  )
}

export default CreateCompte