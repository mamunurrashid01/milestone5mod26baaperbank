// function getBaseHeightOfTriangle() {
//   const getBase = document.getElementById("base");
//   const getBaseVal = parseFloat(getBase.value);
//   console.log(getBaseVal);
//   getBase.value = "";

//   const getHeight = document.getElementById("height");
//   const getHeightVal = parseFloat(getHeight.value);
//   console.log(getHeightVal);
//   getHeight.value = "";
//   const shoArea = 0.5 * getBaseVal * getHeightVal;
//   const showResult = document.getElementById("result");
//   const getText = parseFloat(showResult.innerText);
//   showResult.innerText = `The area of the triangle is : ${getText + shoArea}`;
//   const showArea = document.getElementById("Tarea");
//   const getAreaTe = parseFloat(showArea.innerText);
//   showArea.innerText = getAreaTe + shoArea;
// }

// reusalble function ----> reduce duplicate code
// get triangle area value
function calculationRhombus() {
  const d1 = getInputValue("d1");
  const d2 = getInputValue("d2");
  const result = 0.5 * d1 * d2;
  getAreaText("Rharea", result);
  setCalculationSection(
    "calSec",
    `The area of the Rhombus is: ${result} sqr.cm `
  );
}

// get rectangular value
function getRectanglerValue() {
  const getRectlength = getInputValue("l");
  const getRectwidth = getInputValue("w");
  const result = getRectlength * getRectwidth;
  if (isNaN(getRectlength) || isNaN(getRectwidth)) {
    alert("Please insert a number only");
    return;
  }
  getAreaText("Recarea", result);
  setCalculationSection(
    "calSec",
    `the area of the rectangle is: ${result} sqr.cm `
  );
}

// used reuseable function to reduce code
function getInputValue(inputValue) {
  const inputFild = document.getElementById(inputValue);
  const getValue = parseFloat(inputFild.value);
  return getValue;
}

function getAreaText(elementId, area) {
  const getText = document.getElementById(elementId);
  getText.innerText = area;
  console.log(getText.innerText);
}

// set dynamic html on calculation section
function setCalculationSection(id, area) {
  const getSection = document.getElementById(id);
  const p = document.createElement("p");
  p.innerText = area;
  getSection.appendChild(p);
}
// NB:in the same way i can get output all the geometry
