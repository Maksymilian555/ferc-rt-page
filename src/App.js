import MainPage from "./features/mainPage/Main";
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import Header from "./common/Header"
import ErrorPage from "./features/ErrorPage";


function App() {
  return (
    <HashRouter>
    <nav>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/StronaGłówna" />
        </Route>
        <Route path="/StronaGłówna">
          <MainPage/>
        </Route>
        <Route path="/">
          <ErrorPage/>
        </Route>
      </Switch>
    </nav>
    </HashRouter>
  );
}

export default App;

