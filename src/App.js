import { Route,  BrowserRouter as Router  , Switch } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';

function App() {
  return (
    <>
       <Router>
         <Switch>
         <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
           <Home></Home>
        </Route>
         </Switch>
       </Router>
       </>
  );
}

export default App;
