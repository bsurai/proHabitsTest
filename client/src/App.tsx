import * as React from "react";
import "./App.css";

import { createDevTools } from "redux-devtools";
import LogMonitor from "redux-devtools-log-monitor";
import DockMonitor from "redux-devtools-dock-monitor";

// import ReactDOM from 'react-dom'
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Router, Route, Redirect, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";

import reducers from "./reducers";
import AppLayout from "./containers/layouts/layout";
import HomePage from "./containers/pages/home_page";
import JournalPage from "./containers/pages/journal_page";
// import Callback from "./containers/pages/callback";
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

const store = createStore(
  reducer,
  DevTools.instrument()
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
              <Redirect from="*" to="/404" />
            </Route>
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  };

  /*render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }*/
};

export default App;
