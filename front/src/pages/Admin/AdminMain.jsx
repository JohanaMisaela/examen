import React from 'react'
import Sidebar from '../../components/All/Sidebar'
import Footer from '../../components/All/Footer'
import Cardlist from '../../components/All/Cardlist'
import Introduction from '../../components/All/Introduction'
import AdminNavbar from '../../components/Admin/AdminNavbar'

function AdminMain() {
  return (
    <div>
        <AdminNavbar />
        <div className='col'>
          <div className="row1">
            
        <Sidebar/>
       
        </div>
    <div style={{
  marginTop:"-10em",
  marginBottom:"13em"
}}>
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

export default AdminMain