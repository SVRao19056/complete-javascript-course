// Global app controller
//API Key 185642ca82ffb6918b7b29c4d3e68f46
//https://www.food2fork.com/api/search

import Search from './models/Search';
import {elements  , renderLoader , clearLoader}  from './views/base';
import * as searchView from './views/searchView';
import Recipe from './models/Recipe'

/**
 * @description conatins all the application state 
 */
const state = {};
/** NOTE
 * @description when debug = true , does not call Api returns mock data from config
 */
const debug = true; 

/**
 * @description App Controller
 */
const controlSearch = async () => {
    const query = searchView.getInput();
    console.log(`Query ${query}`)

    //get query view
    if(query)
    {
        state.search = new Search(query);
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
       await  state.search.GetResults(debug);
       //console.log( JSON.stringify(state))
       console.log(`JSON.stringify(state.search.result = ${JSON.stringify(state.search.result)}`);
       searchView.renderResults(state.search.result)
       clearLoader();
    }
}
// const search = new Search('pizza');
// search.GetResults();
const renderButtons = (page , numResults , resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    if (page===1 && pages >1) {

    }else if (page <pages) {

    }else if (page===pages){

    }
}
elements.searchForm.addEventListener('submit', e => {
    console.log('in submit event handler')
    e.preventDefault();
    controlSearch();
})

elements.searchRes.addEventListener('click', e =>{
const btn = e.target.closest('.btn-inline');
    if(btn) {
        const gotoPage = parseInt(btn.dataset.goto, 10);
        searchView.clearInput();
        searchView.clearResults();
        console.log(`gotoPage ${gotoPage}`);
        searchView.renderResults(state.search.result,gotoPage);
       
    }
    
})

/**
 * @description Recipe controller
 */
const r = new Recipe(47275)
r.getRecipe(debug);


