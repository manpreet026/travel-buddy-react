import React from 'react';
import { useEffect, useState } from "react";
import './Serach_bar.css';
import SearchIcon from "@material-ui/icons/Search";
import Page2 from './Page2';
import Page1 from './Page1';
import './Navcity.css';
import Page3 from './Page3';

export default function SearchBar() {
    const [pt,Setpt]=useState(true);
    const [ht,Setht]=useState(false);
    const [rt,Setrt]=useState(false);
    const [st,Setst]=useState(false);
    const [placeList, SetplaceList] = useState([]);
    const GetplaceList = async (query) => {
        console.log(query);
        const temp = await fetch(`http://127.0.0.1:5000/place`).then(res => res.json());
        Object.values(temp).map(item => {
            SetplaceList(item);
        });
      };
    const [hotelsList, SethotelsList] = useState([]);
    const GethotelsList = async (query) => {
        console.log(query);
        const temp = await fetch(`http://127.0.0.1:5000/hotel`).then(res => res.json());
        Object.values(temp).map(item => {
            SethotelsList(item);
        });
      };
    const [marketList, SetmarketList] = useState([]);
    const GetmarketList = async (query) => {
        console.log(query);
        const temp = await fetch(`http://127.0.0.1:5000/market`).then(res => res.json());
        Object.values(temp).map(item => {
            SetmarketList(item);
        });
      };
      const handleSearch=() => {
        GetplaceList(wordEnter);
        GethotelsList(wordEnter);
        GetmarketList(wordEnter);
        console.log(placeList);
      };
    const [wordEnter,setWordEnter]=useState("");
    const handleFilter = event =>{
        const enteredWord = event.target.value;
        setWordEnter(enteredWord)
    };
    const changetype1 =()=>{
        Setpt(true);
        Setht(false);
        Setrt(false);
        Setst(false);
    }
    const changetype2 =()=>{
        Setpt(false);
        Setht(true);
        Setrt(false);
        Setst(false);
    }
    const changetype3 =()=>{
        Setpt(false);
        Setht(false);
        Setrt(true);
        Setst(false);
    }
    const changetype4 =()=>{
        Setpt(false);
        Setht(false);
        Setrt(false);
        Setst(true);
    }
    return (
        <>
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder='Type Jaipur' value={wordEnter} onChange={handleFilter} />
                <div className="icon" onClick={handleSearch}><SearchIcon/></div>
            </div>
        </div>
        {placeList.length!==0 &&(<div className="wrap">
            <ul className="nav">
                <li><p onClick={changetype1}>Places to visit</p></li>
                <li><p onClick={changetype2}>Hotels</p></li>
                <li><p onClick={changetype3}>Restaurants</p></li>
                <li><p onClick={changetype4}>Shops</p></li>
            </ul>
        </div>)}
        {pt && placeList.length!==0 &&(<Page1 title= {placeList}/>)}
        {ht && hotelsList.length!==0 &&(<Page2 title= {hotelsList}/>)}
        {st && hotelsList.length!==0 &&(<Page3 title= {marketList}/>)}
        </>
    );
}
