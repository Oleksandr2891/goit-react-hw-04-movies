import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import LoaderSpiner from "./loader/Loader";
import Container from "./componenets/Container/Container";
import AppBar from "./componenets/AppBar/AppBar";
import GlobalStyles from "./GlobalStyles";
const Navigation = lazy(() => import("./componenets/Navigation/Navigation" /* webpackChunkName: "navigation"*/));
const HomePages = lazy(() => import("../src/pages/HomePage" /* webpackChunkName: "home-pages"*/));
const MoviesPage = lazy(() => import("./pages/MoviesPage" /* webpackChunkName: "movies-page"*/));
const MoviesDetailsPage = lazy(() => import("../src/pages/MovieDetailsPage" /* webpackChunkName: "movies-details-page"*/));



function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <AppBar>
          <Navigation />
        </AppBar>
        <Suspense fallback={<LoaderSpiner />}>
          <Switch>
            <Route path="/" exact>
              <HomePages />
            </Route>
            <Route path="/movies" exact>
              <MoviesPage />
            </Route>
            <Route path="/movies/:movieId">
              <MoviesDetailsPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
        <ToastContainer />
      </Container>
    </>
  );
}

export default App;
