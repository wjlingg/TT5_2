import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Add from "./pages/Add";


export default function Routes() {
  return (
    <Switch>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Add">
        <Add />
      </Route>
    </Switch>
  );
}
