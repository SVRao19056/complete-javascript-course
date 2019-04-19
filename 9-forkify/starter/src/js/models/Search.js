
import axios from 'axios';
export default class Search{
  
    constructor(query , options={}){
        this.query = query
    }
   
    async GetResults(debug){
        //const proxy = 'http://crossorigin.me'
        const proxy = 'https://cors-anywhere.herokuapp.com'
        const key = '185642ca82ffb6918b7b29c4d3e68f46'
        const url = 'http://www.food2fork.com/api/search'
        let apiErr;
        try{
            console.log(`${url}/?key=${key}&q=${this.query}`)
         if (debug)
         {
          let res =  await axios.get(`${proxy}/${url}/?key=${key}&q=${this.query}`);
         // console.log(res);
          this.result = res.data.recipes || res.data;
         }
          console.log(`(!this.result && !res.data.recipes) ${!this.result && !res.data.recipes}`);
          console.log(`isDebug ${(((this.result.Error && !res.data.recipes) ||(!this.result && !res.data.recipes))  || debug)}`);
          if (((this.result.Error && !res.data.recipes) ||(!this.result && !res.data.recipes))  || debug)
          {
              this.result = JSON.parse( 
                  `
               [{
                "publisher": "The Pioneer Woman",
                "f2f_url": "http://food2fork.com/view/47025",
                "title": "Pasta with Pesto Cream Sauce",
                "source_url": "http://thepioneerwoman.com/cooking/2011/06/pasta-with-pesto-cream-sauce/",
                "recipe_id": "47025",
                "image_url": "http://static.food2fork.com/pestoa0e7.jpg",
                "social_rank": 100.0,
                "publisher_url": "http://thepioneerwoman.com"
              },
              {
                "publisher": "The Pioneer Woman",
                "f2f_url": "http://food2fork.com/view/8f3e73",
                "title": "The Best Lasagna Ever",
                "source_url": "http://thepioneerwoman.com/cooking/2007/06/the_best_lasagn/",
                "recipe_id": "8f3e73",
                "image_url": "http://static.food2fork.com/387114468_aafd1be3404a2f.jpg",
                "social_rank": 100.0,
                "publisher_url": "http://thepioneerwoman.com"
              },
              {
                "publisher": "The Pioneer Woman",
                "f2f_url": "http://food2fork.com/view/47032",
                "title": "Shrimp Scampi",
                "source_url": "http://thepioneerwoman.com/cooking/2011/04/16-minute-meal-shrimp-scampi/",
                "recipe_id": "47032",
                "image_url": "http://static.food2fork.com/scampibf5a.jpg",
                "social_rank": 100.0,
                "publisher_url": "http://thepioneerwoman.com"
              },
              {
                "publisher": "Two Peas and Their Pod",
                "f2f_url": "http://food2fork.com/view/54426",
                "title": "Creamy Avocado Pasta",
                "source_url": "http://www.twopeasandtheirpod.com/creamy-avocado-pasta/",
                "recipe_id": "54426",
                "image_url": "http://static.food2fork.com/creamyavocadopasta607e.jpg",
                "social_rank": 99.99999999999989,
                "publisher_url": "http://www.twopeasandtheirpod.com"
              },
              {
                "publisher": "The Pioneer Woman",
                "f2f_url": "http://food2fork.com/view/47275",
                "title": "Pasta Alla Vodka",
                "source_url": "http://thepioneerwoman.com/cooking/2008/12/friday-night-dinner-pasta-alla-vodka/",
                "recipe_id": "47275",
                "image_url": "http://static.food2fork.com/pastaallavodkaa870.jpg",
                "social_rank": 99.99999999999636,
                "publisher_url": "http://thepioneerwoman.com"
              },
              {
                "publisher": "The Pioneer Woman",
                "f2f_url": "http://food2fork.com/view/46943",
                "title": "Seafood Pasta",
                "source_url": "http://thepioneerwoman.com/cooking/2012/03/seafood-pasta/",
                "recipe_id": "46943",
                "image_url": "http://static.food2fork.com/seafoodpasta5075.jpg",
                "social_rank": 99.99999999999329,
                "publisher_url": "http://thepioneerwoman.com"
              },
              {
                "publisher": "Smitten Kitchen",
                "f2f_url": "http://food2fork.com/view/acaff5",
                "title": "baked orzo with eggplant and mozzarella",
                "source_url": "http://smittenkitchen.com/blog/2012/09/baked-orzo-with-eggplant-and-mozzarella/",
                "recipe_id": "acaff5",
                "image_url": "http://static.food2fork.com/7944232460_d833528bc615f4.jpg",
                "social_rank": 99.99999999997709,
                "publisher_url": "http://www.smittenkitchen.com"
              }
                ]
                `)
          }
         // console.log(this.result);
          
         }catch(err){
            apiErr = err;
               }
               
        console.log(` ${(apiErr )? `Error-${apiErr}`:'Sucess'}`)
        //   return {
        //     err: apiErr,  
        //     result: result
        //   } 
        }
}