'use strict';
const movieItem = (movie,update) =>{
    const item = $('<a href="#" class="movie></a>');
    const image = $(`<img class="movie-thumb" src="${movie.thumb}" >`);
    const p = $('<p>' + movie.title + '</p>');
    item.append(image);
    item.append(p);
    return item;
}


const MovieGrid =() =>{
    const mevieCOntainer = $('<div class="movieContainer"></div>'),
    state.movies.forEach((movie) =>{        movieContainer.append(movieItem(movie));
    });
    
}