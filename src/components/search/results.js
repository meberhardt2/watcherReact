import React, { Fragment, useContext } from 'react';

import Result from 'components/search/result';
import { SearchResultsContext } from 'components/contexts/searchResultsContext';

/**************************************************************************************/
function Results(){
    //when you just need the value from the contact, don't load in the update function
    const [searchResults] = useContext(SearchResultsContext)

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
                        <Result key={result.id} result={result} />
                    )}
                </Fragment>
            }
        </div>
    )
}
/**************************************************************************************/


export default Results;