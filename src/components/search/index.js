import React, { Suspense, lazy, useState } from 'react';
import { toast } from 'react-toastify';

import Loading from 'components/common/loading';
import ErrorBoundary from 'components/common/error_boundary';
import API from 'api/api';

const Form = lazy(() => import('components/search/form'));

/**************************************************************************************/
function Search(){

	/****************************************/
    const [form, setValues] = useState({
        query: ''
    });

    const [results, setResults] = useState({
        streams: []
    });
	/****************************************/


    /****************************************/
    const handleInputChange = e =>{
        setValues({...form, [e.target.name]: e.target.value});
        /*
        setValues( prevValues => {
            return { ...prevValues,[e.target.name]: e.target.value}
        });
        */
    };
	/****************************************/

    
	/****************************************/
    const handleSearch = () => {
        let proceed = true;

        if(form.query.length < 3){
            proceed = false;
            toast.error("That's too vague");
        }

        if(proceed){
            document.getElementById('spinner-holder').style.display = 'block';
            
            API.search().then((data) => {
                document.getElementById('spinner-holder').style.display = 'none';
                console.log(data);
                setResults(data);
            });
        }
    }
	/****************************************/



    return(
        <ErrorBoundary>
            <Suspense fallback={<Loading />}>
                <Form form={form} handleInputChange={handleInputChange} handleSearch={handleSearch} />
            </Suspense>
        </ErrorBoundary>
    )
}
/**************************************************************************************/


export default Search;