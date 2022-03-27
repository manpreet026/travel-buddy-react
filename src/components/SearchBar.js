import React from 'react';
import { useEffect, useState } from "react";
import './Serach_bar.css';
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar(props) {
    const handleSearch=() => {
      console.log(wordEnter);
      setWordEnter(wordEnter);
    };
    const [wordEnter,setWordEnter]=useState("");
    const handleFilter = event =>{
        const enteredWord = event.target.value;
        setWordEnter(enteredWord)
    };
    return (
        <>
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder='Type Jaipur' value={wordEnter} onChange={handleFilter} />
                <div className="icon" onClick={handleSearch}><SearchIcon/></div>
            </div>
        </div>
        </>
    );
}
