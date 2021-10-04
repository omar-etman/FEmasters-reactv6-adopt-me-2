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
<<<<<<< HEAD
<<<<<<< HEAD
          <header
            className = "w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via pink-500 to red-500"
          >
=======
          <header>
>>>>>>> parent of 8311b12 (setup tailwid css + apply background img class and header gradient)
=======
          <header>
>>>>>>> parent of 8311b12 (setup tailwid css + apply background img class and header gradient)
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
