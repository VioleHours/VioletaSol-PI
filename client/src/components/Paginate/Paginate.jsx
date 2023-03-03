import React from "react";
import './Paginate.css'

export default function Paginado({countriesPerPage, countries, paginado}){
    const pageNumbrers = []
    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) {
        pageNumbrers.push(i)   
    }
    return(
        <nav className='paginate'>
            <ul className ='list-u'>
                {pageNumbrers && 
                pageNumbrers.map(number =>(
                    <li key={number}>
                        <a className ='buttPage' href onClick={()=>paginado(number)}> {number} </a>  
                    </li> 
                ))}
            </ul>
        </nav>
    )
}
