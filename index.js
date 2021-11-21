//number  
const zero = document.querySelector(".calculator-item-21");
const one = document.querySelector(".calculator-item-17");
const two = document.querySelector(".calculator-item-18");
const three = document.querySelector(".calculator-item-19");
const four = document.querySelector(".calculator-item-13");
const five = document.querySelector(".calculator-item-14");
const six = document.querySelector(".calculator-item-15");
const seven = document.querySelector(".calculator-item-9");
const eight = document.querySelector(".calculator-item-10");
const nine = document.querySelector(".calculator-item-11");
//operator
const acButton = document.querySelector(".calculator-item-5");
const modeButton = document.querySelector(".calculator-item-6");
const backButton = document.querySelector(".calculator-item-7");
const divide = document.querySelector(".calculator-item-8");
const multiply = document.querySelector(".calculator-item-12");
const minus = document.querySelector(".calculator-item-16");
const plus = document.querySelector(".calculator-item-20");
const equal = document.querySelector(".calculator-item-23");
const comma = document.querySelector(".calculator-item-22");
//displayline
var line1 = document.querySelector(".calculator-item-4");
var line2 = document.querySelector(".calculator-item-3");
var line3 = document.querySelector(".calculator-item-2");

//activation
zero.addEventListener("click", () => {
  line1.innerHTML += zero.innerText;
});
one.addEventListener("click", () => {
  line1.innerHTML += one.innerText;
}); 
two.addEventListener("click", () => {
  line1.innerHTML += two.innerText;
});
three.addEventListener("click", () => {
  line1.innerHTML += three.innerText;
});
four.addEventListener("click", () => {
  line1.innerHTML += four.innerText;
});
five.addEventListener("click", () => {
  line1.innerHTML += five.innerText;
});
six.addEventListener("click", () => {
  line1.innerHTML += six.innerText;
});
seven.addEventListener("click", () => {
  line1.innerHTML += seven.innerText;
});
eight.addEventListener("click", () => {
  line1.innerHTML += eight.innerText;
});
nine.addEventListener("click", () => {
  line1.innerHTML += nine.innerText;
});
comma.addEventListener("click", () => {
  line1.innerHTML += comma.innerText;
});
//operators
divide.addEventListener("click", () => {
  line2.innerHTML = ` ${line1.innerHTML} /`;
  line1.innerText = "";
});
modeButton.addEventListener("click", () => {
  line2.innerHTML = ` ${line1.innerHTML} %`;
  line1.innerText = "";
});
multiply.addEventListener("click", () => {
  line2.innerHTML = ` ${line1.innerHTML} *`;
  line1.innerText = "";
});
minus.addEventListener("click", () => {
  line2.innerHTML = ` ${line1.innerHTML} -`;
  line1.innerText = "";
});
plus.addEventListener("click", () => {
  line2.innerHTML = ` ${line1.innerHTML} +`;
  line1.innerText = "";
});

//reset
acButton.addEventListener("click", () => {
  line1.innerText = "";
  line2.innerText = "";
});
//backspace
backButton.addEventListener("click", () => {
  line1.innerText = backk(line1.innerText);
});
var x;
function backk(x) {
  const y = x.toString().split("").slice(0, -1).join("");
  return Number(y);
}
//EQUAL
equal.addEventListener("click", () => {
  if (line1.textContent.includes(",")) {
    line1.textContent = parseFloat(line1.textContent.replace(/,/, "."));
  }
  if (line2.textContent.includes(",")) {
    line2.textContent = parseFloat(line2.textContent.replace(/,/, "."));
  }
  var result = line2.textContent + line1.textContent;

  line1.textContent = pro(line2, line1);
  line2.innerText = "";
  function pro(a, b) {
    var plu = result.split("+");
    var mni = result.split("-");
    var divi = result.split("/");
    var mtp = result.split("*");
    var modee = result.split("%");
    if (plu.length > 1) {
      var i = 0;
      return Number(plu[i]) + Number(plu[i + 1]);
    }
    if (mni.length > 1) {
      var i = 0;
      return Number(mni[i]) - Number(mni[i + 1]);
    }
    if (divi.length > 1) {
      var i = 0;
      if (String(Number(divi[i]) / Number(divi[i + 1])).length > 5) {
        return (Number(divi[i]) / Number(divi[i + 1])).toFixed(5);
      }
      return Number(divi[i]) / Number(divi[i + 1]);
    }
    if (mtp.length > 1) {
      var i = 0;
      return Number(mtp[i]) * Number(mtp[i + 1]);
    }
    if (modee.length > 1) {
      var i = 0;
      return Number(modee[i]) % Number(modee[i + 1]);
    }
  }
});

