import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";

import Theme from "./theme";


function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
