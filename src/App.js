import React from 'react';
import RestauranstList from "./components/RestauranstList";
import RestaurantSearch from "./components/RestaurantSearch";
import Navbar from "./components/Navbar";
import {Route,Switch} from "react-router-dom";


class App extends React.Component{

  render(){
    return(
      <>
    <Navbar/>
    <Switch>

    <Route exact path="/" component={RestauranstList}/>

    <Route exact path="/search" component={RestaurantSearch} />


    </Switch>
      </>
    )
  }
}

export default App;
