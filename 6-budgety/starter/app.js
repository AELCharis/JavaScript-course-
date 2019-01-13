
// BUDGET CONTROLLER
var budgetController = (function () {
//some code

}) ();


// UI CONTROLLER
//epidi tha ti xrisimopiso k se alous controller prepi na ine public
var UIController = (function () {

    var DOMstrings = {
      inputType:'.add__type',
      inputDescription: '.add__description',
      inputValue: '.add__value',
      inputBtn: '.add__btn'

    };

    return{
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,  //perno to value apo to type
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
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
        // 1. Get the filed input data
        var input = UIController.getInput(); //perno apo to UIController ti mehtodo getInput pou periexi ola ta stixia k values

        //2. Add the item to the budget controller
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

