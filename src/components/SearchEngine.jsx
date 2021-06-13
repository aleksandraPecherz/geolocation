import React, {useState} from 'react';
import '../App.css';
import Message from './Message'

function SearchEngine({getGeolocationDetails}) {
    const [searchedItem, setSearchedItem] = useState("")
    const [isCorrect, setIsCorrect] = useState(null)

    const CheckUrl = () => {
        const validUrl = require('valid-url');
        if (validUrl.isUri(searchedItem)){
            const searchedURL = new URL(searchedItem);
            const searchedHost = searchedURL.host
            if (searchedHost==="") return false;
            else {
                getGeolocationDetails(searchedHost, searchedItem )
                return true;
            }
        }
    }

    const CheckIP = () => {
        const validIp = require('is-ip');
        if(validIp(searchedItem)){
            getGeolocationDetails(searchedItem);
            return true;
        }
        else return false;
    }
    const CheckIfDataIsCorrect =()=>{
        if (CheckUrl() || CheckIP()) return true
    }
    const handleClick =() => {
        if(CheckIfDataIsCorrect()){
            setIsCorrect(true)
            setSearchedItem("")
        }
        else setIsCorrect(false)
    }
    const handleChange =(event) => setSearchedItem(event.target.value)
    
    return(
    <div className='search-engine'>
        <div className="search">
            <input className="searchInput" type="text" value={searchedItem} onChange={handleChange}></input>
            <button onClick={handleClick}> SEARCH</button>
        </div>
        <Message isCorrect ={isCorrect}/>
    </div>
    )
}
export default SearchEngine;