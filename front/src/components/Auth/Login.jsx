import React ,{  useState} from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../axios/instance';
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";

import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        if (!email || !password) {
          alert("champ requis")
          return;
        }
        try {
          const data = { email, password }
          const userInfo = await axiosInstance.post('/auth/login', data);
          const user = userInfo.data;
          console.log(user.user)
          const status = user.user.isAdmin;
          if(status === 1 ){
         
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'You are connected as Administrator',
          })
           window.location.href = "/Admin"
        }else{
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'You are connected',
          })
          localStorage.setItem("email", user.user.email);
          localStorage.setItem('password', user.user.password);
          ;
       
       navigate('/Main')
        }
          localStorage.setItem('token', user.token, 'user', user.user);
          

        } catch (err) {
          Swal.fire({
            icon: 'error',
            title: 'error',
            text: 'Invalid credentials',
          }) 
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
Connectez-vous à votre compte
        </p>
         <div className='logincard'>
            <form onSubmit={login}>
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
                    <input type="text" name="email" id="email"  style={{
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
                    <input type="password" name="password" id="password"  style={{
                        width:"40em",
                        height:"40px",
                        marginLeft:"5em",
                        border:"1px solid #ededed"
                    }}
                onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <p className="paragraph" style={{
                    textAlign:"center",
                    marginLeft:"13.5em",
                    marginTop:"3em"
                }}>Mot de passe oublier ?</p>
                <button type="submit" style={{
                    padding:"1.5em",
                    marginLeft:"17em",
                    borderRadius:"7px",
                    backgroundColor:"black"
                }}>
                    Se connecter  
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
                }}>Pas de compte ?<Link to='/signup' style={{
                    textDecoration:"none",
                    color:"rgb(114, 110, 110)"
                }}> Creez-en un ici
                </Link></p>
        </div>
    </div>
   
  )
}

export default Login