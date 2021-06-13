import React, { Fragment, useState } from 'react';

import { JATMLoadTags, JATMGet, JATMAvailableTags, JATMSelectedTags } from 'components/common/tags';

/**************************************************************************************/
function Dev(){

   
	/****************************************/
    const [useless, setUseless] = useState({});
    /****************************************/


    /****************************************/
    const handleInputChange = e =>{
        //setValues({...searchForm, [e.target.name]: e.target.value});
        setUseless( prevValues => {
            return { value: e.target.value}
        });
    };
	/****************************************/


	/****************************************/
	const loadTags = () => {
		let temp = [];
		
		temp.push({id:1,displayName:'first',selected:false});
		temp.push({id:2,displayName:'second',selected:false});
		temp.push({id:3,displayName:'third',selected:false});
		temp.push({id:4,displayName:'fourth',selected:false});

		//setTags(temp);
		//JATMLoadTags('load');
		JATMLoadTags(temp);
	}
	/****************************************/


	/****************************************/
	const getTags = (what) => {
		let tags = JATMGet(what);

		console.log(tags);
	}
	/****************************************/


	/****************************************/
    return(
		<Fragment>
			<div className="row">
				<div className="col-6">
					<input type="text" value={useless.value || ''} className="form-control" onChange={handleInputChange} />
				</div>
			</div>

			<div className="row">
				<div className="col-6">
					<button type="button" onClick={loadTags} className="btn btn-primary">load tags</button>
					&nbsp;
					<button type="button" onClick={() => {getTags('full')}} className="btn btn-primary">get full</button>
				</div>
			</div>

			<div className="row">
				<div className="col-4">
					Available Tags:
					<JATMAvailableTags background={true} />
				</div>

				<div className="col-4">
					Select Tags:
					<JATMSelectedTags background={true} />
				</div>
			</div>
		</Fragment>
	);
	/****************************************/
}
/**************************************************************************************/


export default Dev;	