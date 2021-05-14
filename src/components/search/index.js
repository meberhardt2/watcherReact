import React, { Suspense, lazy, useState, Fragment, useContext } from 'react';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

import Loading from 'components/common/loading';
import ErrorBoundary from 'components/common/error_boundary';
import API from 'api/api';
import { SearchResultsContext } from 'components/contexts/searchResultsContext';

const Form = lazy(() => import('components/search/form'));
const Results = lazy(() => import('components/search/results'));

/**************************************************************************************/
function Search(props){

    /****************************************/
    const [searchForm, setValues] = useState({
        query: ''
    });

    //when just using the update contact function, use a comma
    const [, setSearchResults] = useContext(SearchResultsContext)
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
            document.getElementById('JAT-container').style.display = 'block';
            
            let data = {
                query: searchForm.query
            };

            API.search(data).then((data) => {
                document.getElementById('JAT-container').style.display = 'none';

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
    const handleTrackIt = (id, stream_name) => {
        if(id === ''){
            toast.error('uhoh, this should never happen..');
        }
        else{
            let data = {
                id: id,
                stream_name: stream_name
            };

            //document.getElementById('spinner-holder').style.display = 'block';
            
            API.trackIt(data).then((data) => {
                //document.getElementById('spinner-holder').style.display = 'none';

                if(typeof data === 'undefined' || typeof data.status === 'undefined' || data.status === 'error'){
                    toast.error('there was an error');
                }
                else if(data.status === 'forbidden'){
                    toast.error('that\'s restricted');
                }
                else if(data.status === 'duplicate'){
                    toast.error('already tracking');
                }
                else if(data.status === 'error'){
                    toast.error('error adding stream');
                }
                else{
                    toast.success('tracking it!');
                }
            });
        }
    }
	/****************************************/


	/****************************************/
    const handleDetails = (id) =>{
        props.history.push("/streams/"+id);
    }
	/****************************************/


	/****************************************/
    return(
        <Fragment>
            <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                    <Form searchForm={searchForm} handleInputChange={handleInputChange} handleSearch={handleSearch} handleKeyUp={handleKeyUp} />
                </Suspense>
            </ErrorBoundary>

            <Results handleTrackIt={handleTrackIt} handleDetails={handleDetails} />
        </Fragment>
    );
	/****************************************/
}
/**************************************************************************************/


export default withRouter(Search);