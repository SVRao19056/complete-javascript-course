
/* 
const getIds = new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve([523,833,432 , 974])
}, 1500);

})

const getRecipe = recId => {
  return  new Promise((resolve , reject)=>{
        setTimeout(ID=> {
            const recipe = {title:'recp1', publisher:'Mike'};
            console.log(`${ID}: ${recipe.publisher}`)
            resolve(recipe)

        }, 1500, recId)
    })
}

const getRelated = publisher => {
     return new Promise( (resolve,reject)=> {
         setTimeout(pub=>{
            const recipe = {title:'recp1',publisher:pub}
            resolve(recipe);
         }, 1500,publisher)

});
}
/*
getIds
.then( Ids => {
    console.log(`Ids: ${Ids}`)
     return getRecipe(Ids[2])
}).then( (val)=>{
    console.log(val);
    return getRelated(val.publisher)
}).then(res =>{
    console.log(res);
})
.catch( err=> {
    console.log(err)
})*/
/*
async function getRecipesAW(){
    const IDs = await getIds;
    console.log(IDs);

    const recipe = await getRecipe(IDs[2]);
console.log(recipe)
    const related = await getRelated(recipe.publisher)
    console.log(related)
    return related
}

const rec = getRecipesAW().then(result => {
    console.log(result)})

*/

// https://www.metaweather.com/api/location/2487956/ for CORS in development https://crossorigin.me web site https://corsproxy.github.io
function getWeather(location) {
fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${location}`)
.then( res =>{
    console.log(res)
   return res.json();
}).then(data => {
    console.log(data);
})
.catch(err => {
    console.log(`Error Msg = ${err}`);
})
}

async function getWeatherAW(location) {
    try{
  const result = await  fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${location}`)
  const data = await result.json();
  console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

getWeatherAW(2487956);
getWeatherAW(44418);