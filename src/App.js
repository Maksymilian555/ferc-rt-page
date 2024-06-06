import MainPage from "./features/mainPage/Main";
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import ErrorPage from "./features/ErrorPage";
import GalleryPage from "./features/GalleryPage";
import Wrapper from "./common/Wrapper";
import ShopPage from "./features/ShopPage";
import ProductPage from "./features/ProductPage"
import { toShop, toGallery, toMainPage, toProduct } from "./routes";


function App() {
  return (
    <HashRouter>
    <nav>
      <Switch>
        <Route exact path="/">
          <Redirect to={toMainPage()} />
        </Route>
        <Route path={toMainPage()}>
          <MainPage/>
        </Route>
        <Route path={toGallery()}>
          <Wrapper body = {<GalleryPage/>}/>
        </Route>
        <Route path={toShop()}>
          <Wrapper body= {<ShopPage/>}/>
        </Route>
        <Route path={toProduct()}>
          <Wrapper body= {<ProductPage/>} />
        </Route>
        <Route path="/">
          <Wrapper body={<ErrorPage/>}></Wrapper>
        </Route>
      </Switch>
    </nav>
    </HashRouter>
  );
}

export default App;

