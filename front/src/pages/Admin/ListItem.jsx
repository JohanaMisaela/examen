import React from 'react'
import TablesProduct from '../../components/Admin/TablesProduct'
import Footer from '../../components/All/Footer'
import AdminNavbar from '../../components/Admin/AdminNavbar'

function ListItem() {
  return (
    <div>
      <AdminNavbar />
        <TablesProduct />
        <Footer />
    </div>
  )
}

export default ListItem