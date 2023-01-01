import "./SearchBar.css"
import React from 'react'

export default function SearchBar(props){

    const[search,setSearch]=React.useState("")
    function handleChange(val){
        setSearch(val.target.value)
    }

    return(
        <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={(e)=>{handleChange(e)}} />
        <button onClick={props.search(search)} className="SearchButton">SEARCH</button>
        </div> 
    )
}