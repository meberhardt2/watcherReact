import React, { Fragment, useState } from 'react';

import { AvailableTags, SelectedTags } from 'components/common/tags';

/**************************************************************************************/
function Dev(){

    /****************************************/
    const [tags, setTages] = useState({
        tags: []
    });
    /****************************************/


	/****************************************/
    return(
		<Fragment>
			<div className="row">
				<div className="col-12">
					Select Tags:
					<AvailableTags tags={tags} />
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					Select Tags:
					<SelectedTags />
				</div>
			</div>
		</Fragment>
	);
	/****************************************/
}
/**************************************************************************************/


export default Dev;	