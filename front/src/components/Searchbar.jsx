import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPhone} from '@fortawesome/free-solid-svg-icons'
import '../assets/css/style.css'
function Searchbar() {
  return (
    <div className='searchBar' style={{
        display:"flex",
        marginLeft:"50em"
    }}>
     <form action="" >
      <input type="text" placeholder="Search.." name="search" className='searchbox'/>
      <button type="submit" className='fasearch' style={{
        height:"57px",
        width:"60px"
      }}>
    <FontAwesomeIcon icon={faSearch} style={{
       fontSize:"20px"
      }}/>
        </button>
        
        <button type="submit" className='fasearch' style={{
        height:"57px",
        width:"60px",
        marginLeft:"2em",
        borderTopLeftRadius:"30px",
        borderBottomLeftRadius:"30px",
        borderTopRightRadius:"30px",
        borderBottomRightRadius:"30px"
        }}>
    <FontAwesomeIcon icon={faPhone} style={{
       fontSize:"20px"
      }}/>
        </button>
       
        
        
    </form>
       <p style={{
        fontSize:"20px",
        marginTop:"2.5em",
        marginLeft:"1.5em",
        textAlign:"left"
       }}>+261 38 33 001 25 <br />Service Client</p>
      
    </div>
  )
}

export default Searchbar