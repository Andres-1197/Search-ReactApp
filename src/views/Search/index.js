import { useState } from "react";
import SearchBox from "./components/SearchBox/index";
import "./style.css";
import data from "../../data/users.json"
import SearchResults from "./components/SearchResults";

export default function Search (){

    const [isAtTop,setIsAtTop] = useState(false);
    const [usersData] = useState(data);
    const [results, setResults] = useState([]);

    const handleCloseClick = () => {
        setIsAtTop(false);
        setResults([])
    };

    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if(usersData?.length){
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = usersData.filter((value)=>{
                return (
                    value.name.toLowerCase().includes(searchTextMinus) ||
                    value.username.toLowerCase().includes(searchTextMinus)
                )
            })
            setResults(filteredData)
        }   
    };

    return(
        <div className={`search ${isAtTop ? "search--top": "search--center"}`}>
            <SearchBox 
            onSearch={handleSearchClick} 
            onClose={handleCloseClick} 
            isSearching={isAtTop}/>
            <SearchResults results ={results} isSearching={isAtTop}/>
        </div>
    );
}