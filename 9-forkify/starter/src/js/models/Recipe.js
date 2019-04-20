import axios from 'axios';
import {proxy , key ,url,apiMethods,mockData} from '../config';

export default class Recipe{
    constructor(id){
        this.id = id;
    }

    /**
     * @description This is to avoid crossing the api calll threshold which will happen when you are stuck on a bug.
     * @param {*} debug  When true returns only mock data from config
     * 
     */
    async getRecipe(debug) {
        let apiUrl = `${proxy}/${url}/${apiMethods.GetRecipe}?key=${key}&rId=${this.id}`;
        try{
            console.log(`Recipe Url ${apiUrl}`)
         if (!debug)
         { /** Actual Api Call ***/
          const res =  await axios.get(apiUrl);
         if(res) console.log(`in Recipe NOT DEBUG --${JSON.stringify(res.data)}`);
          this.title = res.data.recipe.title;
          this.author = res.data.recipe.publisher;
          this.img = res.data.recipe.image_url;
          this.url = res.data.recipe.source_url;
          this.ingredients = res.data.recipe.ingredients;
          }else{
             /** Debug path using only mocked data */
             const result = JSON.parse(mockData.Recipe);
             if(result) console.log(`in Recipe DEBUG MODE --${JSON.stringify(result)}`);
            this.title = result.recipe.title;
            this.author = result.recipe.publisher;
            this.img = result.recipe.image_url;
            this.url = result.recipe.source_url;
            this.ingredients = result.recipe.ingredients;
         }

        }catch (err){
            console.log(`getRecipe Error ${err}`);
            alert('Something went wrong');
        }
    }
    calServings() {
        console.log('called calServings');
        this.servings = 4;
    }

    calcTime() {
        /* assumming that 3 ingredents takes 15 minutes each */
        console.log('called calcTime');
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng/3);
        this.time = periods * 15;
    }

    
}