
// BUDGET CONTROLLER
import {elements} from "../../9-forkify/final/src/js/views/base";

var budgetController = (function () {
//some code
    var Expense = function (id, description, value) {
        this.id=id;
        this.description=description;
        this.value=value;
    };

    var Income = function (id, description, value) {
        this.id=id;
        this.description=description;
        this.value=value;
    };

    var data = {
        allItems:{
            exp: [],
            inc:[]
        },
        totals: {
            exp:0,
            inc: 0
        }

    };

    return {
        addItem: Function(type, des, val){
                var newItem, ID;
                ID = 0;  //its special number id

        //create new Id (perni to telefteo apo ton pinaka pou dimourgithike k prostheti +1 gia na dimiourgisi to epomeno)
        if(data.allItems[type].length > 0) {
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

        } else {
            ID = 0;
        }

                //create new item based on income or expense 
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            //to kano push mesa sto array mou
            data.allItems[type].push(newItem); //exoume to type pou ine ite exp ite inc k to kano add sto telos tou array
               
                //epistrofi tou element
                return newItem;
        },
    testing: function () {
        console.log(data);
    }
    };

}) ();


// UI CONTROLLER
//epidi tha ti xrisimopiso k se alous controller prepi na ine public
var UIController = (function () {

    var DOMstrings = {
      inputType:'.add__type',
      inputDescription: '.add__description',
      inputValue: '.add__value',
      inputBtn: '.add__btn',
      incomeContainer: '.income__list',
      expensesContainer: '.expenses__list',

    };

    return{
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,  //perno to value apo to type
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        addListItem: function(obj, type,){
            var html, newHTML element;
            //create html string with placeholder text

            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html =  '<div class="item clearfix" id="income-%id%">
                    <div class="item__description">%description%</div> <div class="right clearfix">
                    <div class="item__value">%value%</div> <div class="item__delete">
                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div> </div> </div>';
            } else {
                element = DOMstrings.expensesContainer;
                html =   '   <div class="item clearfix" id="expense-%id%">\n' +
                    '                            <div class="item__description">%description%</div>\n' +
                    '                            <div class="right clearfix">\n' +
                    '                                <div class="item__value">- %value%</div>\n' +
                    '                                <div class="item__percentage">21%</div>\n' +
                    '                                <div class="item__delete">\n' +
                    '                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>\n' +
                    '                                </div>\n' +
                    '                            </div>\n' +
                    '                        </div>';
            }




            //replace the text with some data
                newHtml = html.replace('%id%', obj.id);
                newHTML = newHTML.replace('%description%', obj.description);
                newHTML = newHTML.replace('%value%', obj.value);

            //Insert the Html Into the DOM
                document.querySelector(element).insertAdjacentHTML('beforeend', newhtml);
             },

        getDOMstrings: function() {  //gia na peraso ta DOMstring pou ine private se all Controller ta kano public edo me ti get
            return DOMstrings;
        }
    };
})();

//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings(); //perno ta strings apo to UICtroller

        document.querySelector(DOM.inputBtn).addEventListener('click',  ctrlAddItem);
        //otan gini click to btn me afto to class tha kaleso ti methodo ctrlAddItem

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem(); //kalo ti methodo
            }
        });
    };

    var ctrlAddItem = function()  {
        
        var input, newItem;
        
        // 1. Get the filed input data
        var input = UIController.getInput(); //perno apo to UIController ti mehtodo getInput pou periexi ola ta stixia k values

        //2. Add the item to the budget controller
        
       var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        //3. Add the new item to the UI
        
        //4. Calculate the budget
        //5. Display the budget
    };
    return { //methodos pou tha eketlesi kodika me to pou ksekinisi to application
        init: function () {  //mono otan kaleso tin init tha litourgisoun ta eventlisteners
            console.log('Application has started.');
            setupEventListeners();
        }
    }
}) (budgetController, UIController);

controller.init();  //kalo tin init() gia na litourigousn ta event liseners

