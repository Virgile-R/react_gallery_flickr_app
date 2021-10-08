import React, { Component } from "react";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Photo from "./Photo";


class PhotoContainer extends Component{
    state = {
        photos: this.props.data,
        loading: true,
        title: this.props.title
    }
    
    componentDidUpdate(prevProps){
        
           
        if (this.props.data && this.props.data !== prevProps.data){
            
            this.setState({
                photos: this.props.data,
                title: this.props.title,
                loading: false
                 
            })
        
        } 
    }

    
     displayPhotos() {
        const photos = this.state.photos
        let data
        if (this.props.loading){
            data = <Loading />
        }   
        else if (photos.length > 0) {
            document.title = `Search results for ${this.state.title.replace('+', ' ')}` 
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
                {this.state.loading ? <h2>Loading...</h2>: <h2>Results for {this.state.title.replace('+', ' ')} </h2>}
                <ul>
               
               {this.displayPhotos()} 

                </ul>
            </div>
        )
    }
}

export default PhotoContainer