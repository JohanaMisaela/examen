import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEdit,
    faEye,
    faTrash
} from '@fortawesome/free-solid-svg-icons'

function TablesProduct() {
  return (
    <div style={{
        width:"80%",
        marginLeft:"10%",
        marginTop:"5em"
    }}>
          <div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">ID</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Nom du produit</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Prix</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Description</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Origine</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Actions</a></div>

        </div>
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">Tom</div>
				<div class="table-data">2</div>
				<div class="table-data">0</div>
				<div class="table-data">1</div>
				<div class="table-data">5</div>
				<div class="table-data">
                <FontAwesomeIcon icon={faEye} style={{
                    fontSize:"25px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"10px",
                    }}/>
                <FontAwesomeIcon icon={faEdit} style={{
                    fontSize:"25px",
                    color:"green",
                    marginLeft:"10px",
                    }}/>
                <FontAwesomeIcon icon={faTrash} style={{
                    fontSize:"25px",
                    color:"red",
                    marginLeft:"10px",
                    }}/>

                </div>

			</div>
            <div class="table-row">		
				<div class="table-data">Tom</div>
				<div class="table-data">2</div>
				<div class="table-data">0</div>
				<div class="table-data">1</div>
				<div class="table-data">5</div>
				<div class="table-data">
                <FontAwesomeIcon icon={faEye} style={{
                    fontSize:"25px",
                    color:"rgb(114, 110, 110)",
                    marginLeft:"10px",
                    }}/>
                <FontAwesomeIcon icon={faEdit} style={{
                    fontSize:"25px",
                    color:"green",
                    marginLeft:"10px",
                    }}/>
                <FontAwesomeIcon icon={faTrash} style={{
                    fontSize:"25px",
                    color:"red",
                    marginLeft:"10px",
                    }}/>

                </div>

			</div>
		
			
		</div>	
	</div>
    </div>
  )
}

export default TablesProduct