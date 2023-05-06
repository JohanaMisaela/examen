import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import '../assets/css/style.css'
function Searchbar() {
  return (
    <div className='searchBar'>
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
    </form>
    </div>
  )
}

export default Searchbar