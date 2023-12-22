import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Dropdown from 'react-bootstrap/Dropdown'; 

export default function Navigation() { 
return ( 
	
	
	<Dropdown> 
		<Dropdown.Toggle variant="Dark"> 
		SHOP
		</Dropdown.Toggle> 
		<Dropdown.Menu> 
		<Dropdown.Item href="#"> 
			All Products
		</Dropdown.Item> 
		
		<Dropdown.Item href="#"> 
			Popular Items
		</Dropdown.Item> 
		<Dropdown.Item href="#"> 
			New Arrivals
		</Dropdown.Item> 
		</Dropdown.Menu> 
	</Dropdown> 
	
); 
}
