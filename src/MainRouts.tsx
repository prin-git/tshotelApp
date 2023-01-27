import { Suspense, lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./app.scss";

const TripList = lazy(() => import("./containers/TripList"));
const MainRoutes = () => (
  <Switch>
    <Route path="/home">
      <Suspense fallback={<div className="fall-back">Loading...</div>}>
        <TripList />
      </Suspense>
    </Route>

    <Redirect from="/" exact to="/home" />
    <Route>
      <div className="fall-back">
        <h2>Page Not Found</h2>
        <p>Please clik on 'home' to visit the page</p>
      </div>
    </Route>
  </Switch>
);

export default MainRoutes;
