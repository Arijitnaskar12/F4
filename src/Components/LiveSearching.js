import React, { useEffect, useState } from "react";


//  dear ai,generate 30 distinct country names

const countries=[
    "Afghanistan", "Albania", "Algeria",
    "Andorra",    "Angola","Pakistan","South Africa","United States","Australia","North America","Northwest","Canada",
    "Anguilla", "Bangladesh","Netherlands", "New Zealand", "Uganda", "Zimbabwe","South Africa","Romania","Nepal", "Nigeria","England","France",
    "Barbados",    "Belarus",
    "Belgium",    "Benin",
    "Bermuda",    "India",
    "Bolivia", "Bosnia and Herzegovina",
    "Botswana",  "Brazil",
    "Brunei","Belarus","Belize","Bel","Indonesia","Iraq","Jordan","Italy","Jamaica",
    "Japan", "Portugul","Poland","Brazil","Romania","Russian Federation","Argentina"
];

const LiveSearching=()=>{
let[search,setSearch]=useState("");
// console.log(search);
let[filterCountries,setFilterCountries]=useState(countries);
useEffect(()=>{
    search==""?setFilterCountries(countries):
    setFilterCountries(countries.filter((country)=> country.toLowerCase().includes(search.toLowerCase())));
},[search])

    return(
        <div>
            <input type="text" placeholder="Search" value={search}
            onChange={(e)=>setSearch(e.target.value)} style={{width:"1050px",height:"40px",fontSize:"24px"}}/>
            {/* <button onClick={searchCountries}>Submit</button> */}
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"space-between"
        }}>
            {
                 filterCountries.map((country) =>(
                    <h1 style={{
                        width:"fit-content",
                        border: "1px solid black",
                        margin: "5px",
                        padding: "5px",
                        textAlign: "center",
                        backgroundColor:"lightgray",
                    }}>{country}</h1>
                 ))
            }
            
        </div>
       </div>
    )
}
export default LiveSearching;