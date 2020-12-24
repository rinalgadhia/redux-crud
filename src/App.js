import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import UserContainer from './components/userContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import InsertUser from './components/insert';

function App() {
  return (
    <div className="App col-md-11 mt-5">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={UserContainer} />
            <Route exact path="/insert" render={() => <InsertUser title={"Insert"} />} />
            <Route exact path="/edit" render={() => <InsertUser title={"Update"} />} />
          </Switch>
        </Router>
      </Provider>
    </div>

    
  );
}

export default App;
