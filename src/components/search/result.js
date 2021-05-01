import React from 'react';

import noImage from "images/no-image.png";

/**************************************************************************************/
function Result(props){

	/****************************************/
    return(
        <div className="row">
            <div className="col-12 col-md-2"></div>
            <div className="col-12 col-md-8">
                {typeof props.result.i !== 'undefined' && typeof props.result.i.imageUrl !== 'undefined' &&
                    <img className="img-fluid search-image rounded shadow-lg float-left" src={props.result.i.imageUrl} alt={props.result.l} />
                }
                {(typeof props.result.i === 'undefined' || typeof props.result.i.imageUrl === 'undefined') &&
                    <img className="img-fluid search-image rounded shadow-lg float-left" src={noImage} alt={props.result.l} />
                }
                <div>{props.result.l} ({props.result.q})</div>
                <div>Year: {props.result.y}</div>
                <div>Years Running: {typeof props.result.yr !== 'undefined' && <span>{props.result.yr}</span>}</div>
                <div className="trackit-holder"><button type="button" className="btn btn-info" onClick={() => props.handleTrackIt(props.result.id, props.result.l)}>Track it!</button></div>
            </div>
            <div className="col-12 col-md-2"></div>
        </div>
    )
	/****************************************/
}
/**************************************************************************************/


export default Result;