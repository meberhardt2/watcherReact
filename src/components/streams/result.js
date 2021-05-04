import React from 'react';


/**************************************************************************************/
function Result(props){

	/****************************************/
    return(
        <div className="row">
            <div className="col-12 col-md-2"></div>
            <div className={'col-12 col-md-8 saved-streams-body '+props.extraClass}>
                <div className="stream-name">{props.result.stream_name}</div>
                <div>Last Season: {props.result.last_season}</div>
                <div>Last Episode: {props.result.last_episode}</div>
                <div className="trackit-holder">
                    <button type="button" className="btn btn-info" onClick={() => props.handleDetails(props.result.imdb_id)}>Details</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => props.handleDelete(props.result.imdb_id)}>Remove</button>
                </div>
            </div>
            <div className="col-12 col-md-2"></div>
        </div>
    )
	/****************************************/
}
/**************************************************************************************/


export default Result;