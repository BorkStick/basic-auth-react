import { Route, Switch } from "react-router";
import "./App.css";
import AppLayout from "./AppLayout";
import HomePage from "./HomePage";

import LandingPage from "./LandingPage";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <ProtectedRoute path="/home" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
