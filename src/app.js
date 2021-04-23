import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from 'components/common/loading';
import ErrorBoundary from 'components/common/error_boundary';
import Header from 'components/common/header';

const Search = lazy(() => import('components/search/index'));

/**************************************************************************************/
function App() {
	return(
		<Router>
			<Header />
			ddd
			<div className="content">
				<ErrorBoundary>
					<Suspense fallback={<Loading />}>
						<Switch>
							<Route exact path="/" component={Search} />
						</Switch>
					</Suspense>
				</ErrorBoundary>
			</div>
			
		</Router>
	);
}
/**************************************************************************************/

export default App;
