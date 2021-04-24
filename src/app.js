import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from 'components/common/loading';
import ErrorBoundary from 'components/common/error_boundary';
import Header from 'components/common/header';

const Search = lazy(() => import('components/search/index'));
const Streams = lazy(() => import('components/streams/index'));
const Stream = lazy(() => import('components/streams/stream'));

/**************************************************************************************/
function App() {
	return(
		<Router>
			<Header />

			<div className="content">
				<ErrorBoundary>
					<Suspense fallback={<Loading />}>
						<Switch>
							<Route exact path="/" component={Search} />
							<Route exact path="/streams" component={Streams} />
							<Route path="/streams/:id" component={Stream} />
						</Switch>
					</Suspense>
				</ErrorBoundary>
			</div>
			
		</Router>
	);
}
/**************************************************************************************/

export default App;
