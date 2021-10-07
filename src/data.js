import { get } from "axios";
import apiKey from "./config";
const subjectsData = [{
    cats: {},
    dogs: {},
    otters: {}
}]


get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`).then(response => {subjectsData.cats = response.data.photos.photo})

get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`).then(response => {subjectsData.dogs =response.data.photos.photo})

 get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=otters&per_page=24&format=json&nojsoncallback=1`).then(response => {subjectsData.otters =response.data.photos.photo})


export default subjectsData