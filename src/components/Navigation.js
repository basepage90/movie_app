import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { actionCreators } from "../store/store";
import "./Navigation.css";




function Navigation({update}){
    
    const setSearchName = ()=> {
        const searchName = document.getElementById("searchName").value;
        update(searchName);
    }

    const handleKeyPress = (e) =>{
        if (e.key === "Enter") {
            setSearchName();
        }
    }
    
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <div className="searchBox">
                <input id="searchName" type="text" onKeyDown={handleKeyPress}/>
                <button type="button" onClick={setSearchName}>Search</button>
            </div>
        </div>
    );
}

  
const mapStateToProps = (state)=>{
    return {state};
}

const mapDispatchToProps = (dispatch) => {
   return {
        update: (text) => dispatch(actionCreators.update(text))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);