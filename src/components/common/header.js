import React from 'react';
import { NavLink } from 'react-router-dom';


/**************************************************************************************/
function Header(){
	const checkActive = (match, location) => {
		//some additional logic to verify you are in the home URI
		if(!location) return false;
		const {pathname} = location;
		return pathname === "/";
	}

	return(
        <div className="header">
            <div className="row">
                <div className="col-12 col-md-6 text-center"><h3>Stream Watcher</h3></div>
                <div className="col-12 col-md-6 text-center top-nav">
                    <div>
                        <NavLink to="/" activeClassName="active" isActive={checkActive}>Home</NavLink>
                        <NavLink to="/streams" activeClassName="active">Saved Streams</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
/**************************************************************************************/

export default Header;