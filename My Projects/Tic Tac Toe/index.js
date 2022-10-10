let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let count = 0;

btn1.addEventListener("click", function () {
  count++;
  if (count === 1 || count === 3 || count === 5 || count === 7 || count === 9) {
    btn1.innerHTML = "X";
  } else {
    btn1.innerHTML = "O";
  }
  btn1.disabled = true;

  if (btn1.innerHTML === btn2.innerHTML && btn2.innerHTML === btn3.innerHTML) {
    document.getElementById("line").style.animation = "grow 1s linear";
  }
  /*(btn1.innerHTML === btn4.innerHTML===btn7.innerHTML)||(btn1.innerHTML === btn5.innerHTML===btn9.innerHTML)){

  }*/
});
btn2.addEventListener("click", function () {
  count++;
  if (count === 1 || count === 3 || count === 5 || count === 7 || count === 9) {
    btn2.innerHTML = "X";
  } else {
    btn2.innerHTML = "O";
  }
  btn2.disabled = true;
});
btn3.addEventListener("click", function () {
  count++;
  if (count === 1 || count === 3 || count === 5 || count === 7 || count === 9) {
    btn3.innerHTML = "X";
  } else {
    btn3.innerHTML = "O";
  }
  if (btn1.innerHTML === btn2.innerHTML && btn2.innerHTML === btn3.innerHTML) {
    let para = document.createElement("p");
    btn1.appendChild(para);
    para.style.animation = "grow 5s linear";
    btn1.style.backgroundColor = "red";
    btn2.style.backgroundColor = "red";
    btn3.style.backgroundColor = "red";
  }
  btn3.disabled = true;
});
btn4.addEventListener("click", function () {
  count++;
  if (count === 1 || count === 3 || count === 5 || count === 7 || count === 9) {
    btn4.innerHTML = "X";
  } else {
    btn4.innerHTML = "O";
  }
  btn4.disabled = true;
});
btn5.addEventListener("click", function () {
  count++;
  if (count === 1 || count === 3 || count === 5 || count === 7 || count === 9) {
    btn5.innerHTML = "X";
  } else {
    btn5.innerHTML = "O";
  }
  btn5.disabled = true;
});
btn6.addEventListener("click", function () {
  count++;
  if (count === 1 || count === 3 || count === 5 || count === 7 || count === 9) {
    btn6.innerHTML = "X";
  } else {
    btn6.innerHTML = "O";
  }
  btn6.disabled = true;
});
btn7.addEventListener("click", function () {
  count++;
  if (count === 1 || count === 3 || count === 5 || count === 7 || count === 9) {
    btn7.innerHTML = "X";
  } else {
    btn7.innerHTML = "O";
  }
  btn7.disabled = true;
});
btn8.addEventListener("click", function () {
  count++;
  if (count === 1 || count === 3 || count === 5 || count === 7 || count === 9) {
    btn8.innerHTML = "X";
  } else {
    btn8.innerHTML = "O";
  }
  btn8.disabled = true;
});
btn9.addEventListener("click", function () {
  count++;
  if (count === 1 || count === 3 || count === 5 || count === 7 || count === 9) {
    btn9.innerHTML = "X";
  } else {
    btn9.innerHTML = "O";
  }
  btn9.disabled = true;
});
