import axios from 'axios'
import {proxy , key ,url,apiMethods,mockData} from '../config'

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
         {
          let res =  await axios.get(apiUrl);
         if(res) console.log(JSON.stringify(res.data));
          this.result = res.data.recipe || res.data;
         }else{
             /** Debug path using only mocked data */
            this.result = JSON.parse(mockData.Recipe);
            if(this.result) console.log(JSON.stringify(this.result));
         }

        }catch (err){
            console.log(`getRecipe Error ${err}`);
        }
    }
}