import axios from 'axios'
import {proxy , key ,url} from '../config'

export default class Recipe{
    contructor(id){
        this.id = id;
    }

    async getRecipe(debug) {
        let apiErr;
        try{
            console.log(` ${url}/?key=${key}&id=${this.id}`)
         if (!debug)
         {
          let res =  await axios.get(`${proxy}/${url}/?key=${key}&id=${this.id}`);
         console.log(res);
          this.result = res.data.recipes || res.data;
         }

        }catch (err){
            console.log(err)
        }
    }
}