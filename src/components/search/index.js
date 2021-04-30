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
    const handleKeyUp = e => {
        if(e.key === 'Enter'){
            handleSearch();
        }
    }
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
            
            let data = {
                query: searchForm.query
            };

            API.search(data).then((data) => {
                document.getElementById('spinner-holder').style.display = 'none';

                if(typeof data === 'undefined'){
                    toast.error('hmm something went wrong with that search');
                }
                else{
                    setSearchResults(data);
                }
            });
        }
    }
	/****************************************/


 	/****************************************/
    const handleTrackIt = (id) => {
        if(id === ''){
            toast.error('uhoh, this should never happen..');
        }
        else{
            let data = {
                id: id
            };

            document.getElementById('spinner-holder').style.display = 'block';
            
            API.trackIt(data).then((data) => {
                document.getElementById('spinner-holder').style.display = 'none';

                if(typeof data === 'undefined' || typeof data.status === 'undefined' || data.status === 'error'){
                    toast.error('there was an error');
                }
                else if(data.status === 'forbidden'){
                    toast.error('that\'s restricted');
                }
                else{
                    toast.success('tracking it!');
                }
            });
        }
    }
	/****************************************/


    return(
        <Fragment>
            <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                    <Form searchForm={searchForm} handleInputChange={handleInputChange} handleSearch={handleSearch} handleKeyUp={handleKeyUp} />
                </Suspense>
            </ErrorBoundary>

            <Results handleTrackIt={handleTrackIt} />
        </Fragment>
    );
}
/**************************************************************************************/


export default Search;