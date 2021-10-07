import React, {  Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import subjectsData from "./data";
import apiKey from "./config";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";

class App extends Component {
  state = {
    photos: [],
    title: 'Flickr API Photo Search'
  };

  componentDidMount(){
    document.title= this.state.title
  }
  

  performSearch =  (query) => {
     axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          photos: response.data.photos.photo,
          title: query

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
           <Route path="/search/cats" render={() => <PhotoContainer data={subjectsData.cats} title={"cats"}/>}/>
           <Route path="/search/dogs" render={() => <PhotoContainer data={subjectsData.dogs} title={"dogs"}/>}/>
           <Route path="/search/otters" render={() => <PhotoContainer data={subjectsData.otters} title={"otters"}/>}/>
           <Route path="/search/:searchstring" render={() => <PhotoContainer data={this.state.photos} title={this.state.title}/>} />
           
                     
          </Switch>
          
          
         
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
