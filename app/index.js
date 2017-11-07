import $ from 'jquery';
import axios from 'axios';

//axios.get returns a promose.
//.then handle success response
//.catch will handle errors
function getData(){
    axios.get( 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json')
    .then((response) => {
        console.log('Response from the server: ', response);

        displayData(response.data.feed.entry);
    })
    .catch((error) => {
        console.log('Error from axios request : ', error);
    })
}

function displayData(movieArray) {
   
   const movieHTML = movieArray.map((movie, index) => {
        console.log('Movie', movie['im:image'][0].label)

        const container = $('<div>');
        const h1 = $(`<h1>${movie['im:name'].label}</h1>`);
        const img = $(`<img src=${movie['im:image'][2].label}><img>`);

        container.append(h1, img);

        return container;
    })

    $('#root').append(movieHTML);
}
getData();