/*
const types = new Map();
const parks = [];
const streets =[];
setUpTypes = () =>{
 types.set('tiny','tiny');
 type.set('small','small');
 type.set('normal','normal');
 type.set('big','big');;
 type.set('huge','huge');
}

getType =(name) =>{
    let type;
    if (types.has(name))
    {
      type =  types.get(name);
    }
 return type;
}
AddPark = (park) => {
    parks.push(park);
}
AddStreet = (street) => {
    streets.push(street)
}
class townElement {
    constructor(name,year){
        this.name=name ;
        this.year=year;
    }
}

class Park extends townElement{
    constructor(treeCnt,area,name,year){
        super(name,year);
        this.treeCnt = treeCnt;
        this.area = area;
    }

    parkDensity(){
         density = Math.round(this.treeCnt / this.area);
         console.log(`density - ${density}`);
        return density;
    }
    parkAge(){
        let age =  this.year - new Date().getFullYear()
    }
}
class Street extends townElement {
    constructor(name,year,lenght,type){
    super(name,year);
    this.lenght =lenght;
    this.type =getType(type);
    }
}

AddPark(new Park(200,500, 'name1', 1950));
AddPark(new Park(100,400, 'name2', 1965));
AddPark(new Park(150,1900, 'name3', 1965));
console.log(parks);
*/

const Models = (function(){
    const parks = new Map();
    const streets = new Map();
    const types = new Map();

setUpTypes = () =>{
 types.set(1,'tiny');
 types.set(2,'small');
 types.set(3,'normal');
 types.set(4,'big');;
 types.set(5,'huge');
}

getEnumEntry =(value , callback) =>{
    let  entry ;
    entry  = callback(value) ;// 
    if (!entry && Array.isArray(entry)&& entry.length===2) throw new Error(`value ${value} does not exist `)
    return entry;
}

getEnumKey = (value) => {
    entry = getEnumEntry(value , (value)=> Array.from(types.entries()).filter( (entry) =>    entry[1]===value ) );
    return entry[0][0];
}

getEnumValue = (key) => {
    entry = getEnumEntry(value , (value)=> Array.from(types.entries()).filter( (entry) =>    entry[0]===key ) );
    return entry[0][1];
}
    class townElement {
        constructor(name,year){
            this.name=name ;
            this.year=year;
        }
    }
    
    class Park extends townElement{
        constructor(treeCnt,area,name,year){
            super(name,year);
            this.treeCnt = treeCnt;
            this.area = area;
        }
    
        parkDensity(){
             density = Math.round(this.treeCnt / this.area);
             console.log(`density - ${density}`);
            return density;
        }
        parkAge(){
            let age =  this.year - new Date().getFullYear()
        }
    }
    class Street extends townElement {
        constructor(name,year,lenght,type){
        super(name,year);
        this.lenght =lenght;
        this.type =getEnumKey(type);
        }
    }

    return {
        AddPark: (treeCnt,area,name,year) => {
            if (parks.has(name))
            {
                err = new Error('Park Error',`Duplicate Name ${name}`);
                return {
                    err : err,
                    park : null 
                }
            }
            parks.set(name,new Park(treeCnt,area,name, year))
            return {
                err: null,
                park: parks.get(name)
            }
        },
        AddStreet: (name,year,lenght,type) => {
            if (streets.has(name))
            {
                err = new Error('Street Error',`Duplicate Name ${street.name}`);
                return {
                    err : err,
                    street : null 
                }
            }
            let size = getEnumKey(type)
            streets.set(name,year,lenght,size)
            return {
                err: null,
                street: streets.get(name)
            }   
        },
        GetPark: (name)=> {
            if (parks.has(name)){
                return parks.get(name);
            }
            
        },
        GetStreet: (name)=> {
            if (streets.has(name)){
                return streets.get(name);
            }
            
        },
        GetStreets: ()=>{
            return streets.entries()
        },
        GetParks: ()=>{
            return parks.entries()
        },
        setUpTypes: setUpTypes,
        getEnumKey : getEnumKey,
        getEnumValue : getEnumValue,

       
    }

})();
const ParkController = (function(){

})();

const StreetController = (function(){

})();


const ReportContoller = (function(){

})();

const AppController =(function (parkCtrl , streetCtrl , reportCtrl, models){

    init = () => {
         models.setUpTypes();
         models.AddPark(200,500, 'name1', 1950);
         models.AddPark(100,400, 'name2', 1965);
         let {err,park} =   models.AddPark(150,1900, 'name3', 1970);
            if (err) console.log(err.message);
            if (park) console.log(park.name);
            for (let [key,park] of models.GetParks()){
                let {treeCnt,area,name,year} = park;
                console.log(`key=${key},park= treeCnt ${treeCnt} area ${area}, name ${name}, year=${year}`);
            };

            models.AddStreet('street1',1925,10500,'huge')
            models.AddStreet('street2',1935,750,'big')
            models.AddStreet('street3',1900,150,'small')
            models.AddStreet('street4',1975,50,'tiny')
            for (let [key,street] of models.GetStreets()){
                let {name,year,len,type} = street;

                console.log(`key=${key},street= lenght ${len} type ${type}, name ${name}, year=${year}`);

            }
        }

    return{
        init: init
    }
   

})(ParkController,StreetController,ReportContoller,Models);

AppController.init();