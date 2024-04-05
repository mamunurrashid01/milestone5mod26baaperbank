// inter activity to deposit button
const dpoBtn = document
  .getElementById("depo")
  .addEventListener("click", function () {
    const getDepoinput = document.getElementById("dpositHere");
    const getDepoValue = parseFloat(getDepoinput.value);
    console.log(typeof getDepoValue);
    const setDepo = document.getElementById("dAmount");
    const prevDeposit = parseFloat(setDepo.innerText);
    setDepo.innerText = prevDeposit + getDepoValue;
    const tBalance = document.getElementById("balanceAmount");
    const prevBalance = parseFloat(tBalance.innerText);
    console.log(typeof prevBalance);
    tBalance.innerText = prevBalance + getDepoValue;

    getDepoinput.value = "";
  });
// inter activity to withdraw button
document.getElementById("withDbtn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdrawtHere");
  const withdrawValue = parseFloat(withdrawInput.value);
  const withdrawDisplay = document.getElementById("withdrawAmount");
  const withdrawDisplayValue = parseFloat(withdrawDisplay.innerText);
  withdrawDisplay.innerText = withdrawValue + withdrawDisplayValue;
  const tBalance = document.getElementById("balanceAmount");
  const prevBalance = parseFloat(tBalance.innerText);
  tBalance.innerText = prevBalance - withdrawValue;
  withdrawInput.value = "";
});
