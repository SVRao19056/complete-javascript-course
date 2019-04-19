
const UIController = (function(){
   var DOMStrings = {
       inputType: '.add__type',
       inputDescription : '.add__description',
       inputValue : '.add__value',
       addBtn: '.add__btn',
       incomeContainer: '.income__list',
       expenseContainer: '.expenses__list',
       budgetLabel: '.budget__value',
       incomeLabel: '.budget__income--value',
       expenseLabel: '.budget__expenses--value',
       percentageLabel: '.budget__expenses--percentage',
       deleteLabel: '.item__delete--btn',
       container: '.container',
       expensesPercLabel : '.item__percentage',
       dateLabel : '.budget__title--month'

   }

    let nodeListForEach = function( list , callback){
        for(let i=0; i<list.length; i++){
            callback(list[i], i)
        }
    }
    let   formatNumber = function(num,type)
           {
               var numSplit , int , dec;
               num = Math.abs(num);
               num = num.toFixed(2);
               numSplit = num.split('.');
                int = numSplit[0];
               if (int > 3) {
                   int = int.substr(0,int.length-3) +',' + int.substr(int.length-3,3);
                }
                dec = numSplit[1];
                type === 'exp' ? sign = '-' : sign = '+';

                return (type === 'exp' ?  '-' : '+') +' ' + int + '.'+ dec;

           }
    
    return {
        getinput : function() {
            return {
                type : document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value : parseFloat( document.querySelector(DOMStrings.inputValue).value)

            };
         },
        getDomStrings : DOMStrings,
        addListItem : function(obj,type){
            let html , newHtml , element;
            // Create HTML with the placeholder text
            if (type === 'inc') {
                element = DOMStrings.incomeContainer
                html =   '<div class="item clearfix" id="inc-%id%"><div class="item__description">%desc%</div><div class="right clearfix"> <div class="item__value"> %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
           } else if (type === 'exp') {
                html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value"> %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                element = DOMStrings.expenseContainer
            }
            //Replace with actual data
            newHtml = html.replace('%id%', obj.id)
            newHtml = newHtml.replace('%desc%', obj.desc)
            newHtml = newHtml.replace('%value%', formatNumber(obj.value))
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml)
        },
        deleteListItem: function(selectedID){
           let el=  document.getElementById(selectedID)
           el.parentNode.removeChild(el);
        },
        clearFields: function(){
            var fields , filedsArr ;
          var fields =  document.querySelectorAll(DOMStrings.inputDescription +', '+ DOMStrings.inputValue);
          fieldsArr = Array.prototype.slice.call(fields);
          console.log(typeof fieldsArr , Array.isArray(fieldsArr));
          fieldsArr.forEach((element ,index,array )=> {
              element.value ="";
              console.log(typeof(array), Array.isArray(array) , index)
          });
          fieldsArr[0].focus();
        },
        displayBudget : function(obj){
            let type = (obj.budget > 0)? 'inc' :'exp'
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber( obj.budget , type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc')
            document.querySelector(DOMStrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp')
            document.querySelector(DOMStrings.percentageLabel).textContent = Math.round(obj.percentage, 2);
            if (obj.percentage >0 ){
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%'
            }else
            {
                document.querySelector(DOMStrings.percentageLabel).textContent = '--'
            }
        },
        displayPercentages : function(percentages){
            let fields = document.querySelectorAll(DOMStrings.expensesPercLabel);
            let nodeListForEach = function( list , callback){
                for(let i=0; i<list.length; i++){
                    callback(list[i], i)
                }
            }
            nodeListForEach( fields , function(current,index){
                current.textContent = percentages[index] > 0 ? percentages[index] + '%' : '---';
            })
           },
        displayMonth : function(){
            let now , year , month , months
            months = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'may' , 'Jun' , 'Jul' , 'Aug','Sept', 'Oct', 'Nov' , 'Dec']
            now = new Date();
            year = now.getFullYear();
            month = now.getMonth();
            document.querySelector(DOMStrings.dateLabel).textContent = months[month+1] + ' ' + year;

        },
        changeType: function(){
         let fields =    document.querySelectorAll(DOMStrings.inputType + ","+ DOMStrings.inputDescription + ',' + DOMStrings.inputValue);

         nodeListForEach( fields , function(cur) {
            cur.classList.toggle('red-focus');
         })
         document.querySelector(DOMStrings.addBtn).classList.toggle('red')
        
        }

      
    }
})();

const budgetController = (function(){
    let data = {
        allitems: {
            exp : [],
            inc : []
        },
        totals: {
            exp: 0,
            inc:0 
        },
        budget : 0,
        percent: -1
    }
    let Expense = function(id, desc , value){
        this.id = id;
        this.desc =desc;
        this.value = value;
        this.percentage = -1
    };
    Expense.prototype.calPercentage = function(totalIncome){
        if (totalIncome > 0){
        this.percentage = Math.round((this.value / totalIncome) * 100);
        }else {
            this.percentage = -1
        }
    }
    Expense.prototype.getPercentage = function(){
       return this.percentage;
    }
    let Income = function(id, desc , value){
        this.id = id;
        this.desc =desc;
        this.value = value;
    }

    let calculateTotal = function(type){
        var sum = 0
        data.allitems[type].forEach( (cur)=> {
            sum += cur.value ;
            data.totals[type] = sum;
        })
    }
   
        return {
            addItem : function(type , des, val){
                var newItem , ID;
                if (data.allitems[type].length > 0){
                ID = data.allitems[type][data.allitems[type].length - 1].id + 1;
                }else{
                    ID =0;
                }
                if (type === 'exp'){
                    newItem = new Expense(ID,des,val)
                }else if (type==='inc')
                {
                    newItem = new Income(ID,des,val)
                }
                data.allitems[type].push(newItem);
                return newItem;
            },
            deleteItem: function(type , id){
              var ids , index;
              ids = data.allitems[type].map( (current)=>{
                  return current.id;
              })
              index = ids[id];
              if (index!==-1)
              {
                  data.allitems[type].splice(index,1)
              }

            },
            calculateBudget: function(){
                //calculate total income and expenses
                    calculateTotal('inc');
                    calculateTotal('exp');
                //calculate budget 
                    data.budget = data.totals.inc - data.totals.exp
                //calculate percent of income
                data.percent = (data.totals.exp / data.totals.inc)*100
            },
            calculatePercentages: function(){
                data.allitems.exp.forEach( function(cur) {
                    cur.calPercentage(data.totals.inc);
                })
            },
            getPercentages : function(){
                let allPercent = data.allitems.exp.map( function(cur){
                   return  cur.getPercentage()
                })
                return allPercent;
            },
            getBudget: function() {
                return {
                    budget: data.budget,
                    totalInc: data.totals.inc,
                    totalExp: data.totals.exp,
                    percentage: data.percent
                };
            }
         
        }
})();

const controller = (function(budgetCtrl , UICtrl){
    let input , newItem ;
    let setupEventListeners = function(){
        var DOM = UICtrl.getDomStrings;
        document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            // console.log(event);
            if (event.keyCode===13 || event.which===13){
                console.log('enter preseed')
                ctrlAddItem()
            }
        })

        document.querySelector(DOM.container).addEventListener('click' , crtlDeleteItem);
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);

    }
    
    let updateBudget = function(){
        //Calculate Budget
        budgetCtrl.calculateBudget();
        // Return Budget
        var budget = budgetCtrl.getBudget();
        //Display on UI
       UICtrl.displayBudget(budget);
    }

    let updatePercentages = function(){
            //cal percentages
                budgetController.calculatePercentages();
            //REad from budget controller
                var percentages = budgetController.getPercentages();
            //updateUI with new percentages
            if (percentages.length> 0){ 
                UICtrl.displayPercentages(percentages);
            }
    }
    let ctrlAddItem = function(){
        input = UIController.getinput();
        if(input.description && !isNaN(input.value) && input.value >0)
        {
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            UICtrl.addListItem(newItem,input.type);
            updateBudget();
            updatePercentages();
        }
       
        UICtrl.clearFields();
        
    }
    

    let crtlDeleteItem = function(event){
        let itemId , splitId , type , ID;
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemId) {
           splitId = itemId.split('-')
            type = splitId[0];
            ID = parseInt(splitId[1]);
           budgetCtrl.deleteItem(type,ID);
           UICtrl.deleteListItem(itemId);
           updateBudget();
           updatePercentages();
         }
    }

  return {
      init: function() {
          console.log('Application has started')
          setupEventListeners();
          UICtrl.displayBudget({
            budget:0,
            totalInc: 0,
            totalExp: 0,
            percentage: -1
          })
          UICtrl.clearFields();
          UICtrl.displayMonth();
      }
  }
})(budgetController,UIController);

controller.init();