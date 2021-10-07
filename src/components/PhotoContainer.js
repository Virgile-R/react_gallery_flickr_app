import React, { Component } from "react";
import NotFound from "./NotFound";
import Photo from "./Photo";


class PhotoContainer extends Component{
    state = {
        photos: JSON.parse(window.localStorage.getItem('photos')) || this.props.data,
        
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
        const photos =  this.state.photos
        let data
           
        if (photos.length > 0) {
            document.title = `Search results for ${this.state.title}` 
                data =  photos.map( photo =>
               
                    <Photo url={
    `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} alt={photo.title} />
                
                
                )} else {
                data = <NotFound />
            }
        return data
        } 
    

    render() {
        
     
        return (
            <div className="photo-container">
                <h2>Results for {this.state.title.replace('+', ' ')} </h2>
                <ul>
               
                {this.displayPhotos()}

                </ul>
            </div>
        )
    }
}

export default PhotoContainer