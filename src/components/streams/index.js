import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import API from 'api/api';
import Result from 'components/streams/result';

/**************************************************************************************/
function Streams(props){

    /****************************************/
    const [streams, setStreams] = useState([]);
	/****************************************/


	/****************************************/
    useEffect(() => {
        API.getStreams().then((data) => {
            setStreams(data);
        });
    }, []);
	/****************************************/


	/****************************************/
    const handleDetails = (id) =>{
        props.history.push("/streams/"+id);
    }
	/****************************************/


    /****************************************/
    return(
        <Fragment>
            <div className="row ">
                <div className="col-12 text-center">
                    Total: {streams.length}
                </div>
            </div>

            <div className="saved-streams-holder">
                {streams.map((result,index) =>
                    <Result result={result} key={result.id} handleDetails={handleDetails} extraClass={streams.length === (index + 1) ? 'last' : ''} />
                )}
            </div>
        </Fragment>
    )
	/****************************************/
}
/**************************************************************************************/


export default withRouter(Streams);