// How do I grab the bill input elements
let bill = document.getElementById("bill_input");
let people = document.getElementById("number_of_people");
let percent = document.querySelectorAll(".buttons");
let tip = document.getElementById("tip_total");
let total = document.getElementById("bill_total");
let theme = document.getElementById("theme_btn");
let darkMode = false;
// Access body style
let body = document.body.style;
let container = document.querySelector(".container").style;
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
        let totals = (billValue/ peopleValue) + tipAmount;
        tip.innerHTML = tipAmount;
        total.innerHTML = totals;
    }
}

theme.addEventListener("click", function(){
  // Write function for light and dark mode
  if (darkMode == false) {
    darkProps();
    console.log("Dark mode");
    darkMode = true;
  } else {
    lightProps();
    console.log("light again");
    darkMode = false;
  }
});

// Change to light
function lightProps() {
  theme.src = "./images/icon-moon.svg";
  body.background = ("#bbe1e6");
  container.filter = "invert(0)";

  
}

// Change to dark
function darkProps() {
  body.background = "#0b353a";
  container.filter = "invert(.9)";
  theme.src = "./images/icon-sun.svg";
  
}


// https://www.youtube.com/watch?v=etYv-pPfol4