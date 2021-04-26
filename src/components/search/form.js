import React from 'react';


/**************************************************************************************/
function Form({form, handleInputChange}){
    return(
        <div className="row form-holder">
            <div className="col-12 col-md-2"></div>
            <div className="col-12 col-md-8 text-center">
                Stream Watcher<br />
                <input type="text" className="form-control" name="query" id="query" onChange={handleInputChange} value={form.query} />
            </div>
            <div className="col-12 col-md-2"></div>
        </div>
    )
}
/**************************************************************************************/


export default Form;