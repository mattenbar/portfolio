import React from 'react'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'
import Home from './Components/home'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{

render(){
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path ="/" render={()=> <Home />}/>
      </Switch>
    </div>
  );
}
}


export default App;
