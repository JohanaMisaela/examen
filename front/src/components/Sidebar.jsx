import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faAdd, faLaptop, faMinus, faMobile, faMicrochip, faTv, faHeadphones} from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    const [showPanel, setShowPanel] = useState(false); // initial state: panel is hidden
    const [addIcon, setAddIcon] = useState(faAdd); // initial state: add icon is shown

    const togglePanel = () => {
        setShowPanel(!showPanel);
        setAddIcon(showPanel ? faAdd : faMinus);
    }

  return (
    <div className='sidebar'>
        <div className="categorie"><p className='sousheader'>Toutes Categories</p></div>
        <div className="listCategorie">
            <div className="cat">
                <FontAwesomeIcon icon={faMicrochip} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                HighTech
                <FontAwesomeIcon icon={faAdd} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"13em",
                    }} 
                    onClick={togglePanel}
                    />
            </div> 
            {showPanel && 
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
            }
            <div className="cat">
                <FontAwesomeIcon icon={faNetworkWired} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                HighTech
                <FontAwesomeIcon icon={faAdd} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"13em"
                    }}
                    onClick={togglePanel}
                    />
            </div>
            {showPanel && 
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
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
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
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
            </div>
            }
             <div className="cat">
                <FontAwesomeIcon icon={faNetworkWired} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                HighTech
                <FontAwesomeIcon icon={faAdd} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"13em",
                    }} 
                    onClick={togglePanel}
                    />
            </div> 
            {showPanel && 
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
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
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
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
            </div>
            }
            <div className="cat">
                <FontAwesomeIcon icon={faNetworkWired} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em"
                    }}/>
                HighTech
                <FontAwesomeIcon icon={faAdd} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"13em"
                    }}
                    onClick={togglePanel}
                    />
            </div>
            {showPanel && 
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
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
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
                    <FontAwesomeIcon icon={faLaptop} style={{
                    fontSize:"20px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"4em",
                    marginRight:"1em",
                    marginTop:"1em",
                    }}/>Laptop
                </div>
            </div>
            }
            
        </div>
    </div>
  )
}

export default Sidebar