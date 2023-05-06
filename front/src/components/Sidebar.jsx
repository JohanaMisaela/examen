import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAdd, faLaptop, faMobile, faMicrochip, faTv, faHeadphones} from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
   const  togglePanel= () => {
   
  const pannel = document.querySelector('.pannel');
  const isHidden = pannel.style.display === 'none';
  pannel.style.display = isHidden ? 'block' : 'none';
 }
 

  return (
    
    <div className='sidebar'>
       
        <div className="categorie"><p style={{
            fontSize:"20px",
            color:"white"
        }}>Toutes Categories</p></div>
        <div className="listCategorie">
            <div className="cat">
                <FontAwesomeIcon icon={faMicrochip} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                HighTech
                <FontAwesomeIcon icon={faAdd} className="faAdd" style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"13em",
                    }} 
                    
                    />
            </div> 
           
            <div className="pannel">
                <div className="sousCat">
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faMobile} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Mobile
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faTv} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Télévision
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faHeadphones} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Casques
                </div>
            </div>
            <div className="cat">
                <FontAwesomeIcon icon={faMicrochip} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                HighTech
                <FontAwesomeIcon icon={faAdd} className="faAdd" style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"13em",
                    }} 
                    
                    />
            </div> 
           
            <div className="pannel">
                <div className="sousCat">
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faMobile} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Mobile
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faTv} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Télévision
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faHeadphones} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Casques
                </div>
            </div>
            <div className="cat">
                <FontAwesomeIcon icon={faMicrochip} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                HighTech
                <FontAwesomeIcon icon={faAdd} className="faAdd" style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"13em",
                    }} 
                    />
            </div> 
           
            <div className="pannel">
                <div className="sousCat">
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faMobile} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Mobile
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faTv} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Télévision
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faHeadphones} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Casques
                </div>
            </div>
            <div className="cat">
                <FontAwesomeIcon icon={faMicrochip} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                HighTech
                <FontAwesomeIcon icon={faAdd} className="faAdd" style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"13em",
                    }} 
                    />
            </div> 
           
            <div className="pannel">
                <div className="sousCat">
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faMobile} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Mobile
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faTv} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Télévision
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faHeadphones} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Casques
                </div>
            </div>
            <div className="cat">
                <FontAwesomeIcon icon={faMicrochip} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                HighTech
                <FontAwesomeIcon icon={faAdd} className="faAdd" style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"13em",
                    }} 
                    />
            </div> 
           
            <div className="pannel">
                <div className="sousCat">
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faMobile} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Mobile
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faTv} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Télévision
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faHeadphones} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Casques
                </div>
            </div>
            <div className="cat">
                <FontAwesomeIcon icon={faMicrochip} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                HighTech
                <FontAwesomeIcon icon={faAdd} className="faAdd" style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"13em",
                    }} 
                    />
            </div> 
           
            <div className="pannel">
                <div className="sousCat">
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faMobile} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Mobile
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faTv} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Télévision
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faHeadphones} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Casques
                </div>
            </div>
            <div className="cat">
                <FontAwesomeIcon icon={faMicrochip} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                HighTech
                <FontAwesomeIcon icon={faAdd} className="faAdd" style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"13em",
                    }} 
                    />
            </div> 
           
            <div className="pannel">
                <div className="sousCat">
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faMobile} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Mobile
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faTv} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Télévision
                </div>
                <div className="sousCat">
                    <FontAwesomeIcon icon={faHeadphones} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Casques
                </div>
            </div>
        </div>
        <script>
        const faAdd = document.querySelector('.faAdd');
f       faAdd.addEventListener('click', togglePanel);
        </script>
    </div>
  )
}

export default Sidebar