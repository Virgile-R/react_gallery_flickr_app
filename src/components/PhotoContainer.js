import React, { Component } from "react";
import NotFound from "./NotFound";
import Photo from "./Photo";
import axios from "axios";
import apiKey from "../config";
class PhotoContainer extends Component{
    state = {
        photos: [],
        loading: true
    }
    componentDidMount(){
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            photos: response.data.photos.photo,
            loading: false})

        }).catch(error => {
          console.log("Error fetching data", error)
        })
    }
    displayPhotos() {
        const photos = this.state.photos
        let data
        
        if ( photos.length > 0) {
          data =  photos.map( photo =>
               
                <Photo url={
`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} alt={photo.title} />
            )}else if (this.state.loading) {
                data = <p>Loading...</p>
                
            } else {
                data = <NotFound />
            }
        return data
        } 
    

    render() {
        
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
               
                {this.displayPhotos()}

                </ul>
            </div>
        )
    }
}

export default PhotoContainer