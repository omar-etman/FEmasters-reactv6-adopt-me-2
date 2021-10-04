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
      <div
        className = "p-0 m-0"
        style ={{  
          background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)"
        }}
      >
        <Router>
          <header
            className = "w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via pink-500 to red-500"
          >
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
