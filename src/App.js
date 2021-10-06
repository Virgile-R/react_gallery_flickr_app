import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';

import SearchForm from './components/SearchForm'
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer'


class App extends Component {
  
 
 

  render () { return (
    <BrowserRouter>
      <div className="App">
        
        <SearchForm />
        <Nav />
        <Switch>
          
          <Route path="/search/:searchstring" component={Nav} />
          
        </Switch>
        <PhotoContainer />
        
       
      </div>
    </BrowserRouter>
  );}
}


export default App;
