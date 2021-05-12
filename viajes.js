let vacationCalc =document.getElementById("vacationCalc")
 
  vacationCalc.addEventListener("submit" CalcExpenses)



  function calcExpenses (){
e.preventDefaultt();

let destiny =document.getElementById("destiny").Value,
     budget = document.getElementById("bugget").value,
     acomodation = document.getElementById("acomodation").value,
     transport = document.getElementById("transport").value,
    food = document.getElementById("food").value;
console.log(destiny,budget)



let expenses = parseInt(acomodation) + parseInt(transport) + parseInt(food)
let balance = budget - expenses
console.log(budget,balance,destiny)

  }
function UI (){
let result = document.getElementById("div")
let dataPrint =  document.getElementById ("result")

dataPrint.innerHTML =
<div class
}
