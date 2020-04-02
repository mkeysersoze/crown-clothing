import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, Link } from 'react-router-dom';

const HatsList = (props) => (
  <div>
    <h1>HATS PAGE</h1>
    <Link to={`${props.match.url}/13`} >TO HAT 13</Link>
    <Link to={`${props.match.url}/17`} >TO HAT 17</Link>
    <Link to={`${props.match.url}/21`} >TO HAT 21</Link>
  </div>
)

const HatDetail = (props) => (

  <div>
    {console.log(props)}
    <h1>HATS DETAIL PAGE: {props.match.params.hatsId} </h1>
  </div>
)



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsList} />
        <Route exact path='/hats/:hatsId' component={HatDetail} />
      </Switch>
    </div>
  );
}

export default App;
