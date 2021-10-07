import React, { Component } from "react";
import NotFound from "./NotFound";
import Photo from "./Photo";


class PhotoContainer extends Component{
    state = {
        photos: JSON.parse(window.localStorage.getItem('photos')) || this.props.data,
        loading: true,
        title: JSON.parse(window.localStorage.getItem('title')) || this.props.title
    }
   
    componentDidUpdate(prevProps){
           
        if (this.props.data !== prevProps.data){
            window.localStorage.setItem('photos', JSON.stringify(this.props.data))
            window.localStorage.setItem('title', JSON.stringify(this.props.title))
            this.setState({
                photos: this.props.data,
                title: this.props.title,
                 
            })
        
        } 
    }

    
    displayPhotos() {
        const photos = this.state.photos
        let data
        document.title = `Search results for ${this.state.title}`    
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
                <h2>Results for {this.state.title} </h2>
                <ul>
               
                {this.displayPhotos()}

                </ul>
            </div>
        )
    }
}

export default PhotoContainer