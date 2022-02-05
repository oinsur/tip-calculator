// How do I grab the bill input elements
let bill = document.getElementById("bill_input");
let people = document.getElementById("number_of_people");
let percent = document.querySelectorAll(".buttons");
let tip = document.getElementById("tip_total");
let total = document.getElementById("bill_total");

bill.addEventListener("change", billInputFun);
people.addEventListener("change", peopleInputFun);
percent.forEach(function(btn){
    btn.addEventListener("click", handleClick);
})

bill.value = 0;
people.value = 1;
tip.innerHTML = 0;
total.innerHTML = 0;

let billValue = 0;
let peopleValue = 1;
let tipValue = .15;

function billInputFun() {
    billValue = parseInt(bill.value);
    // console.log(billValue);
    calculateTip();
}

function peopleInputFun() {
    peopleValue = parseInt(people.value);
    // console.log(peopleValue);
    calculateTip();
}

function handleClick(event) {
    percent.forEach(function(btn){
        btn.classList.remove("active");
        if (event.target.innerHTML == btn.innerHTML) {
            btn.classList.add("active");
            tipValue = parseInt(btn.innerHTML) / 100;
        }
    });
    console.log(tipValue);
}

function calculateTip () {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let totals = (billValue + tipAmount) / peopleValue;
        tip.innerHTML = tipAmount;
        total.innerHTML = totals;
    }
}
// https://www.youtube.com/watch?v=etYv-pPfol4