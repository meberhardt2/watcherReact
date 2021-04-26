import React, { Suspense, lazy, useState } from 'react';

import Loading from 'components/common/loading';
import ErrorBoundary from 'components/common/error_boundary';

const Form = lazy(() => import('components/search/form'));

/**************************************************************************************/
function Search(){

    const [form, setValues] = useState({
        query: 'start'
    });

    const handleInputChange = e =>{
        setValues({...form, [e.target.name]: e.target.value});
        /*
        setValues( prevValues => {
            return { ...prevValues,[e.target.name]: e.target.value}
        });
        */
    };

    return(
        <ErrorBoundary>
            <Suspense fallback={<Loading />}>
                <Form form={form} handleInputChange={handleInputChange} />
            </Suspense>
        </ErrorBoundary>
    )
}
/**************************************************************************************/


export default Search;