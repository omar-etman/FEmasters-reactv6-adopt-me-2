import '../style.css'
import { useState, lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import ThemeContext from './ThemeContext'

const Details = lazy(()=>import("./Details"));
const SearchParams = lazy(()=>import("./SearchParams"));

function App() {
  const theme = useState("darkblue");


  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Suspense fallback={<h2>loading route ...</h2>}>
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
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
