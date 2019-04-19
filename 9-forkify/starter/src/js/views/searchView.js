import { elements } from './base'
export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
    elements.searchInput.value = ''
};
export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.resultPaging.innerHTML ='';
}

const limitRecipeTitle = (title, limit = 17) => {
    const newFile = [];
    if ( title.length>limit){
    title.split(' ').reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
            newFile.push(cur)
        }
        return acc + cur.lenght
    }, 0)
    console.log(newFile);
    console.log(newFile.join(' '));
    return `${newFile.join(' ')}...`;
}
    return title;
}
export const renderRecipe = (recipe) => {
    const markup =
        ` <li>
    <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
            <p class="results__author">${recipe.publisher}</p>
        </div>
    </a>
</li>`
  return  elements.searchResList.insertAdjacentHTML('beforeend', markup)
}
/**
 * Creates the html of the paging buttons at bottom of recipe list
 * @param {number} page current page number
 * @param {string} type  This can be 'prev' | 'next
 */
const createButtons = (page , type) =>{
    let pagingNumbers = `${type === 'prev' ? page - 1 : page + 1}`
let btnHtml = 
 ` <button class="btn-inline results__btn--${type}" data-goto="${pagingNumbers}">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev'?'left' : 'right'}"></use>
        </svg>
        <span>Page ${pagingNumbers} </span>
    </button>
  `
  return btnHtml;
}

const renderButtons = (page , numResults , resPerPage) =>{
    const pages = Math.ceil(numResults*resPerPage)
    let button;
    if (page === 1 &&  pages > 1){
        // next only
      button=   createButtons(page,'next')
    }else if (page < pages){
        //next
     button=  `${createButtons(page,'prev')}
                ${createButtons(page,'next')}
              `
        //prev
        createButtons(page,'prev')
    }else if (page == pages && pages > 1){
        //prev only
      button=  createButtons(page,'prev')
    }
  console.log(` pageCnt ${pages}, button ${button}`)
    elements.resultPaging.insertAdjacentHTML('afterbegin',button)
}

export const renderResults = (recipes, page = 1, resPerPage = 4) => {
    console.log(`renderResults -recipes ${recipes}`);
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    recipes.slice(start, end).forEach(recipe => {
        renderRecipe(recipe);
    });
    console.log(`renderButtons -page ${page}, recipe cnt ${recipes.length} , page cnt = ${resPerPage} `);
    renderButtons(page, recipes.length, resPerPage);
};
