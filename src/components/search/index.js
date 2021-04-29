import React, { Suspense, lazy, useState, Fragment, useContext } from 'react';
import { toast } from 'react-toastify';

import Loading from 'components/common/loading';
import ErrorBoundary from 'components/common/error_boundary';
import API from 'api/api';
import { SearchResultsContext } from 'components/contexts/searchResultsContext';

const Form = lazy(() => import('components/search/form'));
const Results = lazy(() => import('components/search/results'));

/**************************************************************************************/
function Search(){

    /****************************************/
    const [searchForm, setValues] = useState({
        query: ''
    });

    //when just using the update contact function, use a comma
    
    const [, setSearchResults] = useContext(SearchResultsContext)
    //const [searchResults, setSearchResults] = useContext(SearchResultsContext)
    /*
    const [searchResults, setResults] = useState({
        results: [],
        total: null
    });
    */
	/****************************************/


    /****************************************/
    const handleInputChange = e =>{
        //setValues({...searchForm, [e.target.name]: e.target.value});
        setValues( prevValues => {
            return { ...prevValues,[e.target.name]: e.target.value}
        });
    };
	/****************************************/

    
	/****************************************/
    const handleSearch = () => {
        let proceed = true;

        if(searchForm.query.length < 3){
            proceed = false;
            toast.error("That's too vague");
        }

        if(proceed){
            document.getElementById('spinner-holder').style.display = 'block';
            
            API.search().then((data) => {
                document.getElementById('spinner-holder').style.display = 'none';

                setSearchResults(data);
            });
        }
    }
	/****************************************/


    return(
        <Fragment>
            <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                    <Form searchForm={searchForm} handleInputChange={handleInputChange} handleSearch={handleSearch} />
                </Suspense>
            </ErrorBoundary>

            <Results />
        </Fragment>
    )
}
/**************************************************************************************/


export default Search;