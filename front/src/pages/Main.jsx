import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Cardlist from '../components/Cardlist'
import Introduction from '../components/Introduction'

function Main() {
  return (
    <div>
        <Navbar />
        <div className='col'>
          <div className="row1">
            
        <Sidebar/>
        <Introduction />
        </div>
       

        <div className="row2">
        <Cardlist/>
          </div>
        </div>
        <div>
        <Footer />

        </div>
    </div>
  )
}

export default Main