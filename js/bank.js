// inter activity to deposit button
const dpoBtn = document
  .getElementById("depo")
  .addEventListener("click", function () {
    // get deposit btn to get dipisit input value
    const getDepoinput = document.getElementById("dpositHere");
    const getDepoValue = parseFloat(getDepoinput.value);
    console.log(typeof getDepoValue);
    // set diposit amount to diposit fild
    const setDepo = document.getElementById("dAmount");
    const prevDeposit = parseFloat(setDepo.innerText);
    setDepo.innerText = prevDeposit + getDepoValue;
    // to set total balance and it's calculation
    const tBalance = document.getElementById("balanceAmount");
    const prevBalance = parseFloat(tBalance.innerText);
    console.log(typeof prevBalance);
    tBalance.innerText = prevBalance + getDepoValue;

    getDepoinput.value = "";
  });
// inter activity to withdraw button
document.getElementById("withDbtn").addEventListener("click", function () {
  // get deposit btn to get withdraw input value
  const withdrawInput = document.getElementById("withdrawtHere");
  const withdrawValue = parseFloat(withdrawInput.value);
  // to set total withdraw and it's calculation
  const withdrawDisplay = document.getElementById("withdrawAmount");
  const withdrawDisplayValue = parseFloat(withdrawDisplay.innerText);
  withdrawDisplay.innerText = withdrawValue + withdrawDisplayValue;
  // to set total balance and it's calculation
  const tBalance = document.getElementById("balanceAmount");
  const prevBalance = parseFloat(tBalance.innerText);
  tBalance.innerText = prevBalance - withdrawValue;
  withdrawInput.value = "";
});

// // to inteactive using function  baap er bank
// function getdepoInpFild(inputId) {
//   const getinputFild = document.getElementById(inputId);
//   const getdepoInpFildVal = parseFloat(getinputFild.value);
//   return getdepoInpFildVal;
// }

// function setToprevDeposit(prevVal) {
//   const getprevDepo = document.getElementById(prevVal);
//   const getprevDepoVal = parseFloat(getprevDepo.innerText);
//   return getprevDepoVal;
// }

// // function setDepoValueTotal(inVal, preVal){
// //  const getInput =
// // }

// document.getElementById("depo").addEventListener("click", function () {
//   const getInputDepoVal = getdepoInpFild("dpositHere");
//   const setDepoValue = setToprevDeposit("dAmount");
//   const totalDeposit = getInputDepoVal + setDepoValue;
//   console.log(totalDeposit);
// });
