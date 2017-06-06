'use strict';
const render = (root) =>{
  root.empty();
    const wrapper = $('<div class="wrapper></div>');
    // Append components
    wrapper.append(Header());
    wrapper.append(MovieGrid());
    root.append(wrapper);
    
};
const state = {
    movies: movies,
    selectedMovie:null
}

$( _ =>{
    const root = $('.root');
    render(root);
});