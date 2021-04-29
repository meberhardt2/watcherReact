import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from 'components/common/loading';
import ErrorBoundary from 'components/common/error_boundary';
import Header from 'components/common/header';
import { SearchResultsContextProvider } from 'components/contexts/searchResultsContext';

const Search = lazy(() => import('components/search/index'));
const Streams = lazy(() => import('components/streams/index'));
const Stream = lazy(() => import('components/streams/stream'));

/**************************************************************************************/
function App() {
	return(
		<Router>
			<Header />

			<SearchResultsContextProvider>
				<div className="content">
					<ErrorBoundary>
						<Suspense fallback={<Loading />}>
							<Switch>
								<Route exact path="/"><Search /></Route>
								<Route exact path="/streams"><Streams /></Route>
								<Route path="/streams/:id"><Stream /></Route>
							</Switch>
						</Suspense>
					</ErrorBoundary>
				</div>
			</SearchResultsContextProvider>

		</Router>
	);
}
/**************************************************************************************/

export default App;
