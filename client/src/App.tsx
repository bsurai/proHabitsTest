import * as React from "react";
import "./App.css";

import { createDevTools } from "redux-devtools";
import LogMonitor from "redux-devtools-log-monitor";
import DockMonitor from "redux-devtools-dock-monitor";

import { default as immutableStateInvariant } from "redux-immutable-state-invariant";

import { createStore, combineReducers } from "redux";
import { compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { Router, Route, Redirect, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import AppLayout from "./containers/layouts/layout";
import HomePage from "./containers/pages/home_page";
import JournalPage from "./containers/pages/journal_page";
import Callback from "./containers/pages/callback";
import NotFoundPage from "./containers/pages/not_found_page";
// import { requireAuth } from "./utils/AuthService";
// const logo = require('./logo.svg');

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
);

const middlewares = [thunk, logger, immutableStateInvariant()];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = compose(middlewareEnhancer, DevTools.instrument());

const store = createStore(
  reducer,
  enhancers
);
const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component<{}, null> {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route path="/" component={AppLayout}>
              <IndexRoute component={HomePage} />
              <Route path="/journal" component={JournalPage} />
              <Route path="/callback" component={Callback} />
              <Route path="/404" component={NotFoundPage} />
              <Redirect from="*" to="/404" />
            </Route>
          </Router>
          <DevTools />
        </div>
      </Provider>
); }; };

export default App;
