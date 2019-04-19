'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderResults = exports.getInput = undefined;

var _base = require('./base');

var getInput = exports.getInput = function getInput() {
    return _base.elements.searchInput.value;
};
var renderRecipe = function renderRecipe(recipe) {
    var markup = ' <li>\n    <a class="results__link" href="#' + recipe.recipe_id + '">\n        <figure class="results__fig">\n            <img src="' + recipe.image_url + '" alt="' + recipe.title + '">\n        </figure>\n        <div class="results__data">\n            <h4 class="results__name">' + recipe.title + '</h4>\n            <p class="results__author">' + recipe.publisher + '</p>\n        </div>\n    </a>\n</li>';
    _base.elements.serachList.insertAdjacentHTML('beforeend', markup);
};
var renderResults = exports.renderResults = function renderResults(recipes) {
    recipes.array.forEach(function (recipe) {
        renderRecipe(recipe);
    });
};
//# sourceMappingURL=searchView.js.map