import '../style.css'
import { useState } from 'react';
import SearchParams from "./SearchParams";
import Details from './Details';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import ThemeContext from './ThemeContext'

function App() {
  const theme = useState("darkblue");


  return (
    <ThemeContext.Provider value={theme}>
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
    </ThemeContext.Provider>
  );
}

export default App;
