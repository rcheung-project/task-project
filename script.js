//Form Validation

//Variable Target///

/* const form = document.querySelector("#form");
const inputValue = document.querySelector("#InputValue");
const assignValue = document.getElementById("assignValue");
const statusValue = document.getElementById("statusValue");
const dateValue = document.getElementById("dateValue");
const descValue = document.getElementById("descValue");  */

const aName = document.getElementById("aName");
const cardStyle = document.querySelector(".cardStyle");

const aNameText = document.getElementById("aNameText");
const cars = document.getElementById("cars");
const subBtn = document.getElementById("subBtn");


class Card {
  constructor(eTaskValue, eAssignValue, eStatusValue, eDateValue, eDescValue) {
      this.taskValue = eTaskValue;
      this.assignValue = eAssignValue;
      this.statusValue = eStatusValue;
      this.dateValue = eDateValue;
      this.descValue = eDescValue;
   }
    setDisplay() {
    const mkHTML = `<div class="cardDiv">\n`    
                 + `<p> Task: ${this.taskValue}</p>\n`
                 + `<p>============================</p>\n`
                 + `<p> Assigned to: ${this.assignValue}</p>\n`
                 + `<p> Status:  ${this.statusValue}</p>\n`
                 + `<p">Due date: ${this.dateValue}</p>\n`
                 + `<p">To: ${this.descValue}</p>\n`
                 + `<button class="deleteBtn">Delete</button>\n`
                 + `</div>\n`;   
    cardStyle.innerHTML = mkHTML;
    console.log(mkHTML);
    console.log("good");
    console.log(this.taskValue);
  } 
}

  subBtn.addEventListener('click', displayThis);
    function displayThis() {
    const myCard = new Card(aName.value, cars.value, "in-progress", "12 December, 2002", "Learn React");
    myCard.setDisplay();
  }

form.addEventListener("submit", (event) => {
  validateForm();
  console.log(inputValue.value);
  const ourCard = new Card(inputValue.value, assignValue.value, statusValue.value, dateValue.value, descValue.value, 1);
  Card.addTask(ourCard);
  console.log(ourCard);
  if (isFormValid() == true) {
    form.submit();
  } else {
    event.preventDefault();
  }
});

function isFormValid() {
  const inputContainers = document.querySelectorAll(".input-group");
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains("error")) {
      result = false;
    }
  });
  return result;
}

function validateForm() {
  //Task Name
  if (inputValue.value.trim() === "") {
    setError(inputValue, "*Please Enter Your Name");
  } else {
    setSuccess(inputValue);
  }
  //Assign To
  if (assignValue.value === "") {
    setError(assignValue, "*Please Choose Team Member");
  } else {
    setSuccess(assignValue);
  }
  //Status
  if (statusValue.value === "") {
    setError(statusValue, "*Please Choose Your Status");
  } else {
    setSuccess(statusValue);
  }

  //date
  if (dateValue.value == "") {
    setError(dateValue, "*Please Choose Your Due Date");
  } else {
    setSuccess(dateValue);
  }
  //Description
  if (descValue.value.trim().length < 10 || descValue.value.trim() > 200) {
    setError(
      descValue,
      "*Description Minimum 10 and Maximum 200 characters long"
    );
  } else {
    if (descValue.value.trim().length < 10 || descValue.value.trim() > 200) {
    } else {
      setSuccess(descValue);
    }
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");
  const paragraph = parent.querySelector("p");
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}

const months = ['January', 'February', "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let time = document.getElementById('dateNtime')
let current = new Date();
//let cDate = `${current.getDate()} / ${(current.getMonth() + 1)} / ${current.getFullYear()}`
let cDate = `${current.getDate()}  ${months[current.getMonth()]}  ${current.getFullYear()} <br>`
let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
let dateTime = cDate + ' ' + cTime;
time.innerHTML = dateTime; 
