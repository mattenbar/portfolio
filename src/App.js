import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './Components/home'
import NavBar from './Components/NavBar'
import InvoiceTracker from './Components/InvoiceTracker'
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component{

render(){
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path ="/" render={()=> <Home />}/>
        <Route exact path ="/invoiceTracker" render={()=> <InvoiceTracker />}/>
      </Switch>
    </div>
  );
}
}


export default App;
