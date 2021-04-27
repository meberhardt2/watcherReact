import React from 'react';


/**************************************************************************************/
function Form({form, handleInputChange, handleSearch}){
    return(
        <div className="form-holder">
            <div className="row ">
                <div className="col-12 col-md-2"></div>
                <div className="col-12 col-md-8 text-center">
                    Stream Watcher<br />
                    <input type="text" placeholder="enter any title..." className="form-control" name="query" id="query" onChange={handleInputChange} value={form.query} />
                </div>
                <div className="col-12 col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2"></div>
                <div className="col-12 col-md-8 text-center">
                    <button type="button" className="btn btn-primary" onClick={handleSearch}>Search</button>
                </div>
                <div className="col-12 col-md-2"></div>
            </div>
        </div>
    )
}
/**************************************************************************************/


export default Form;