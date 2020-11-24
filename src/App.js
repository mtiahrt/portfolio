import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import MyWork from './pages/MyWork';
import ContactMe from './pages/ContactMe';
import MovieDetail from "./pages/MovieDetail";
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <MyWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail/>
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;