import '../style.css'
import SearchParams from "./SearchParams";
import Details from './Details';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1 id="my-brand">Adopt Me</h1>
          </Link>
        </header>
        <Switch>
          <Route exact path = "/">
            <SearchParams />
          </Route>
          <Route path="/details/:id">
            <Details/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
