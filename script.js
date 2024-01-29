"use strict";

window.addEventListener("DOMContentLoaded", start); //Kører funktionen "start", når DOM loader 💯

function start() {
  console.log("JavaScript kører"); //Logger at programmet kører 💯
  hideAll(); //Kører hideAll() 💯
  askAboutName(); //Kører askAboutName() 💯
}

function hideAll() {
  //Tilføjer klassen "hide" til diverse html objekter 💯
  document.querySelector("#ask-name").classList.add("hide");
  document.querySelector("#ask-age").classList.add("hide");
  document.querySelector("#ask-birthyear").classList.add("hide");
  document.querySelector("#success").classList.add("hide");
  document.querySelector("#failure").classList.add("hide");
}

function fillInFields(fieldname, value) {
  document.querySelectorAll(`[data-field=${fieldname}]`).forEach(element => (element.textContent = value)); //For each loop, der setter valuen for vært element i "data-field" 💯
}

function askAboutName() {
  const form = document.querySelector("#ask-name"); //Definerer "form" 💯
  form.addEventListener("submit", answeredName); //Tilføjer en eventlistener til objekt med id "submit", og kører answeredName(), hvis eventet sker 💯
  form.classList.remove("hide"); //Fjerner "hide" klasse fra form 💯
}

function answeredName(event) {
  event.preventDefault(); //Fjerner default behavior fra event parameteret 💯

  const form = event.target; //Definer form 💯
  form.removeEventListener("submit", answeredName); //Fjerner event listener fra objekt med id "submit" 💯
  form.querySelector("button").disabled = true; //Sætter knaps status som værende disabled 💯

  const firstname = form.firstname.value; //Definer firstname 💯
  console.log("Answered name: " + firstname); //Logger brugerdefineret firstname 💯

  fillInFields("firstname", firstname); //Kører fillInFields() med parametret "firstname", som det brugerdefinerede firstname 💯

  askAboutAge(); //Kører askAboutAge ✅
}

function askAboutAge() {

  //Samme som før QED 💯
  const form = document.querySelector("#ask-age");
  form.addEventListener("submit", answeredAge);
  form.classList.remove("hide");
}

function answeredAge(event) {
  //Samme som før QED 💯

  event.preventDefault();

  const form = event.target;
  form.removeEventListener("submit", answeredAge);
  form.querySelector("button").disabled = true;

  const age = form.age.valueAsNumber;
  console.log("Answered age: " + age);

  fillInFields("age", age);

  askAboutBirthYear(age); //✅

function askAboutBirthYear(age) {
  //Samme som før QED 💯

  // calculate birthyear - expect that the person HASN'T had their birthday yet this year
  const birthyear = 2024 - 1 - age; //Definerer korrekt fødeår 💯

  fillInFields("birthyear", birthyear);

  const form = document.querySelector("#ask-birthyear");
  form.addEventListener("submit", answeredBirthyear);
  form.classList.remove("hide");
}

function answeredBirthyear(event) {

  //Samme som før QED 💯
  event.preventDefault();

  const form = event.target;
  form.removeEventListener("submit", answeredBirthyear);
  form.querySelector("button").disabled = true;


  //Nye ting :D
  const correct = form.correct.value; //Definerer det korrekte fødeår 💯
  console.log("Answered correct: " + correct); //Logger om brugeren mener svaret er korrekt 💯

  if (correct === "yes") { //Hvis brugeren svarer "ja" 💯
    showSuccess(); //Kør showSuccess() 💯
  } else {
    showFailure(); //Kør showFailure() 💯
  }
}

function showSuccess() {
  document.querySelector("#success").classList.remove("hide"); //Fjerner klassen "hide" fra html objekt med id "success" 💯
}

function showFailure() {
  document.querySelector("#failure").classList.remove("hide"); //Fjerner klassen "hide" fra html objektet med id "failure" 💯
}
}