import React, { Suspense, lazy } from 'react';

import Loading from 'components/common/loading';
import ErrorBoundary from 'components/common/error_boundary';

const Form = lazy(() => import('components/search/form'));

/**************************************************************************************/
function Search(){
    return(
        <ErrorBoundary>
            <Suspense fallback={<Loading />}>
                <Form />
            </Suspense>
        </ErrorBoundary>
    )
}
/**************************************************************************************/


export default Search;