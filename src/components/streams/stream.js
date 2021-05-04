import React from 'react';
import { useParams } from 'react-router-dom';


/**************************************************************************************/
function Stream(){
    let params = useParams();

    return(
        <div>{params.id}</div>
    )
}
/**************************************************************************************/


export default Stream;