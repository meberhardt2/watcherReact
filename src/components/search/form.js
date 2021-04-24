import React from 'react';


/**************************************************************************************/
function Form(){
    return(
        <div className="row form-holder">
            <div class="col-12 col-md-2"></div>
            <div class="col-12 col-md-8 text-center">
                Stream Watcher<br />
                <input type="text" className="form-control" name="query" id="query" />
            </div>
            <div class="col-12 col-md-2"></div>
        </div>
    )
}
/**************************************************************************************/


export default Form;