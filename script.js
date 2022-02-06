// How do I grab the bill input elements
let bill = document.getElementById("bill_input");
let people = document.getElementById("number_of_people");
let percent = document.querySelectorAll(".buttons");
let tip = document.getElementById("tip_total");
let total = document.getElementById("bill_total");
let theme = document.getElementById("theme_btn");
let custom = document.getElementById("custom");
let darkMode = false;
let reset = document.getElementById("reset");
// Access body style
let body = document.body.style;
// Access the container for the app
let container = document.querySelector(".container").style;

percent.forEach(function(btn){
  btn.addEventListener("click", handleClick);
});

function tipSplit(billAmount, amtPeople, percentage) {
  billAmount = parseFloat(bill.value);
  amtPeople = parseFloat(people.value);

  if(custom.value) {
    percentage = parseInt(custom.value)/100;
    if(billAmount && amtPeople) {
      let tipPerPerson = (billAmount * percentage) / amtPeople;
      let totalPerPerson = (billAmount / amtPeople) + tipPerPerson;
      tip.innerText = "$" + tipPerPerson.toFixed(2);
      total.innerText = "$" + totalPerPerson.toFixed(2);
    }
  }
  else if (billAmount && amtPeople && percentage) {
    let tipPerPerson = (billAmount * percentage) / amtPeople;
    let totalPerPerson = (billAmount / amtPeople) + tipPerPerson;
    tip.innerText = "$" + tipPerPerson.toFixed(2);
    total.innerText = "$" + totalPerPerson.toFixed(2);
  }
}

function handleClick(event) {
  percent.forEach(function(btn){
      btn.classList.remove("active");
      if (event.target.innerHTML == btn.innerHTML) {
          btn.classList.add("active");
          percentage = parseInt(btn.innerHTML) / 100;
      }
  });
}

bill.addEventListener("change", tipSplit)

// How do I grab the people input element?
people.addEventListener("change", tipSplit)

// How do I make it so when I click each button it will console log the percent
percent.forEach((btn)=> {
    btn.addEventListener("click", function() {
        let btns = parseInt(btn.innerText)/100
        tipSplit(bill, people, btns)
    });
});

// reset button
reset.addEventListener("click", function(){
  tip.innerText = "$0.00";
  total.innerText = "$0.00"
  bill.value = "";
  people.value = "";
  custom.value = "";
});


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
  container.filter = "invert(0.9) hue-rotate(80deg)";
  theme.src = "./images/icon-sun.svg";
  
}