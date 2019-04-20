
import axios from 'axios';
import {proxy , key ,url,apiMethods , mockData} from '../config'
export default class Search{
  
    constructor(query , options={}){
        this.query = query
    }
   
     /**
     * @description This is to avoid crossing the api calll threshold which will happen when you are stuck on a bug.
     * @param {*} debug  When true returns only mock data from config
     * 
     */
    async GetResults(debug){
        //const proxy = 'http://crossorigin.me'
        // const proxy = 'https://cors-anywhere.herokuapp.com'
        // const key = '185642ca82ffb6918b7b29c4d3e68f46'
        // const url = 'http://www.food2fork.com/api/search'
        let apiErr;
        let apiUrl = `${proxy}/${url}/${apiMethods.Search}?key=${key}&q=${this.query}`
        let res;
        try{
           
         if (!debug)
         {
            console.log(`calling apiUrl`)   
          res =  await axios.get(apiUrl);
         // console.log(res);
          this.result = res.data.recipes || res.data;
         }
           console.log(`isDebug ${((!res) || debug)}`);
          if ((!this.result) || debug)
          {
              console.log(`debug mode= ${debug}`);
              this.result = JSON.parse( mockData.Recipes);
          }
         // console.log(this.result);
          
         }catch(err){
            apiErr = err;
               }
               
        console.log(` isDebug= ${debug} | ${(apiErr )? `Error Message -${apiErr}`:'Sucess'}`);
        //   return {
        //     err: apiErr,  
        //     result: result
        //   } 
        }
}