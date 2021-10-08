import React, { Component } from "react";

import NotFound from "./NotFound";
import Photo from "./Photo";

class PhotoContainer extends Component {
  state = {
    photos: this.props.data,
    title: this.props.title,
  };

  //handle what the component should do when it updates: if props.data changes, sets state.data to the new props data. If no data (for example when refreshing) performs a search
  componentDidUpdate(prevProps) {
    if (this.props.data && this.props.data !== prevProps.data) {
      this.setState({
        photos: this.props.data,
        title: this.props.title,
      });
    } else if (this.props.params) {
      this.props.onSearch(this.props.params.searchstring);
    }
  }
// uses state.photo to display the photos. Renders a Photo component for each photo in the array or a Not Found if the array is empty
  displayPhotos() {
    const photos = this.state.photos;
    let data;
    if (photos.length > 0) {
      document.title = `Search results for ${this.state.title.replace(
        "+",
        " "
      )}`;
      data = photos.map((photo) => (
        <Photo
          url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          key={photo.id}
          alt={photo.title}
        />
      ));
    } else {
      data = <NotFound />;
    }
    return data;
  }

  render() {
    return (
      <div className="photo-container">
        <h2>Results for {this.state.title.replace("+", " ")} </h2>
        <ul>{this.displayPhotos()}</ul>
      </div>
    );
  }
}

export default PhotoContainer;
