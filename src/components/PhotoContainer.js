import React, { Component } from "react";
import NotFound from "./NotFound";
import Photo from "./Photo";


class PhotoContainer extends Component{
    state = {
        photos: this.props.data,
        loading: true
    }
  
    componentDidUpdate(prevProps){
        if (this.props.data !== prevProps.data){
            this.setState({
                photos: this.props.data
            })
        }

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