import logobnk from '../../assets/images/logobnk.jpeg'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios/instance';
import { useNavigate, useParams } from 'react-router-dom';

function AddCard() {

    const [form, setForm] = useState({});
    const {id} = useParams();
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});

    const onChangeHandler = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
        
      };
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axiosInstance.put(`/admin/users/${id}`, form)
        .then(res=>{
          navigate('/')
        })
        .catch(err=>setErrors(err.response.data))
        
       }
    //   useEffect(async () => {
    //     await axiosInstance.get(`/admin/users/${id}`).then((res) => {
    //       setForm(res.data);
    //     });
    //   }, []);
  return (
    <div className="addcard" style={{
        width:"70%",
        marginLeft:"15%",
        marginTop:"5em",
    }}>
         
    <div className="card">
            <div style={{
                height: "400px",
                width:"70%"
            }}>
                <div className="logobnk" style={{
            width:"5em",
            height:"5em",
            marginTop:'1em',
            marginBottom:'3em',
            marginLeft:"50%"
        }}>
            <img src={logobnk} alt=""  style={{
            width:"100%",
            height:"100%"
        }}/>
        </div>
            <form onSubmit={onSubmitHandler}> 
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    paddingTop:"1em"   
                }}>
                    <label htmlFor="nameItem" style={{
                        fontSize:"20px",
                        color:"rgb(114, 110, 110)",
                        fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                        marginLeft:"10em",
                        marginBottom:"15px"
                    }}>Nom du produit : </label>
                    <input type="text" name="nom" id="" style={{
                        border:"1px solid #ededed",
                        width:"300px",
                        height:"30px",
                        marginLeft:"5em"
                    }} 
                    onChangeHandler={onChangeHandler}
                    value={form.nom}
                    />
                    </div>
                    <div style={{
                    display:"flex",
                    flexDirection:"row",
                    paddingTop:"1em"   
                }}>
                    <label htmlFor="nameItem" style={{
                        fontSize:"20px",
                        color:"rgb(114, 110, 110)",
                        fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                        marginLeft:"10em",
                        marginBottom:"15px"

                    }}>Prix du produit : </label>
                    <input type="text" name="prix" id="" style={{
                        border:"1px solid #ededed",
                        width:"300px",
                        height:"30px",
                        marginLeft:"5.5em"
                    }}
                    onChangeHandler={onChangeHandler}
                    value={form.prix}
                    />
                    </div>
                    <div style={{
                    display:"flex",
                    flexDirection:"row",
                    paddingTop:"1em"   
                }}>
                    <label htmlFor="nameItem" style={{
                        fontSize:"20px",
                        color:"rgb(114, 110, 110)",
                        fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                        marginLeft:"10em",
                        marginBottom:"15px"

                    }}>Description : </label>
                    <input type="text" name="description" id="" style={{
                        border:"1px solid #ededed",
                        width:"300px",
                        height:"30px",
                        marginLeft:"8.3em"
                    }}
                    onChangeHandler={onChangeHandler}
                    value={form.description}
                    />
                    </div>
                    <div style={{
                    display:"flex",
                    flexDirection:"row",
                    paddingTop:"1em"   
                }}>
                    <label htmlFor="nameItem" style={{
                        fontSize:"20px",
                        color:"rgb(114, 110, 110)",
                        fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                        marginLeft:"10em",
                        marginBottom:"15px"

                    }}>Site d'origine : </label>
                    <input type="text" name="origine" id="" style={{
                        border:"1px solid #ededed",
                        width:"300px",
                        height:"30px",
                        marginLeft:"6.7em"
                    }} 
                    onChangeHandler={onChangeHandler}
                    value={form.origine}
                    />
                    </div>
                    <div style={{
                    display:"flex",
                    flexDirection:"row",
                    paddingTop:"1em"   
                }}>
                    <label htmlFor="nameItem" style={{
                       fontSize:"20px",
                       color:"rgb(114, 110, 110)",
                       fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                       marginLeft:"10em",
                       marginBottom:"15px"

                    }}>Image du Produit : </label>
                    <input type="file" name="image" id="" style={{
                        border:"1px solid #ededed",
                        width:"300px",
                        height:"30px",
                        background:"#ededed",
                        color:"rgb(114, 110, 110)",
                        marginLeft:"3.4em"
                        
                    }} />
                    </div>

                
    
                <button type="submit" style={{
                    backgroundColor:"#c02b27",
                    marginTop:"20px",
                    marginLeft:"5em"
                }}>
                    Ajouter produit 
                </button>
            </form>
            </div>
    </div>
    <div style={{
        width:"30%",
        marginLeft:"70%",
        height:"400px",
        backgroundColor:"#c02b27",
        marginTop:"-400px"
    }}>

    </div>
        </div>  )
}

export default AddCard