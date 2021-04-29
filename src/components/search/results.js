import React, { Fragment, useContext } from 'react';

import Result from 'components/search/result';
import { SearchResultsContext } from 'components/contexts/searchResultsContext';

/**************************************************************************************/
function Results(props){

	/****************************************/
    //when you just need the value from the contact, don't load in the update function
    const [searchResults] = useContext(SearchResultsContext)
	/****************************************/


	/****************************************/
    return(
        <div className="results-holder">
            {typeof searchResults.total !== 'undefined' && 
                <Fragment>
                    <hr size="1" width="80%" />
                    
                    <div className="row ">
                        <div className="col-12 text-center">
                            Total: {searchResults.total}
                        </div>
                    </div>

                    {searchResults.results.map((result,index) =>
                        <Result result={result} handleTrackIt={props.handleTrackIt} key={result.id} />
                    )}
                </Fragment>
            }
        </div>
    )
	/****************************************/
}
/**************************************************************************************/


export default Results;