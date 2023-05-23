import React from 'react'
import ViewItem from '../../components/ViewItem'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

function Viewpro() {
  return (
    <div>
    <Navbar />
    <div className='col'>
      <div className="row1">
      <Sidebar/>
      </div>
      <div className="row2">
    <ViewItem />
      </div>
    </div>
    <div>
    <Footer />

    </div>
</div>
  )
}

export default Viewpro