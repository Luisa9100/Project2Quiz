// let first = sessionStorage.getItem("first");
// let second = sessionStorage.getItem("second");
// let third = sessionStorage.getItem("third");

document.querySelector(".neutralhide").style.display = "none";
document.querySelector(".besthide").style.display = "none";
document.querySelector(".worsthide").style.display = "none";

// console.log(first, second, third);
let user_result = sessionStorage.getItem("user_type");
let score = sessionStorage.getItem("points");
document.querySelector(".results").innerHTML = `Your score is ${score}`;
let mess;
let typo;
if (user_result == "Best") {
  document.querySelector(".besthide").style.display = "block";
} else if (user_result == "Worst") {
  document.querySelector(".worsthide").style.display = "block";
} else {
  document.querySelector(".neutralhide").style.display = "block";
}
