import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";

import apiKey from "./config";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";

class App extends Component {
  state = {
    photos: [],
  };

  performSearch =  (query) => {
     axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          photos: response.data.photos.photo,
        });
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }

  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
          <SearchForm onSearch={this.performSearch}/>
          
          <Nav  />
          <Switch>
           
           
                     
          </Switch>
          
          <Route path="/search/:searchstring" render={() => <PhotoContainer data={this.state.photos}/>} />
         
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
