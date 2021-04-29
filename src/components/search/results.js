import React from 'react';

import Result from 'components/search/result';

/**************************************************************************************/
function Results({searchResults}){
    return(
        <div className="results-holder">
            <hr size="1" width="80%" />
            
            <div className="row ">
                <div className="col-12 text-center">
                    Total: {searchResults.total}
                </div>
            </div>

            {searchResults.results.map((result,index) =>
                <Result key={result.id} result={result} />
            )}
        </div>
    )
}
/**************************************************************************************/


export default Results;