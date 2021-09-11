import '../style.css'
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from './Details';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <h1 id="my-brand">Adopt Me</h1>
      <Router>
        <Switch>
          <Route path="/details/:id">
            <Details/>
          </Route>
          <Route path = "/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
