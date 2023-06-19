import React from 'react'
import ViewItem from '../../components/All/ViewItem'
import Navbar from '../../components/User/Navbar'
import Sidebar from '../../components/All/Sidebar'
import Footer from '../../components/All/Footer'

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