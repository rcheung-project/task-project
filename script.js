//Form Validation

//Variable Target///

//const form = document.querySelector("#form");
const inputValue = document.getElementById("InputValue");
const assignValue = document.getElementById("assignValue");
const statusValue = document.getElementById("statusValue");
const dateValue = document.getElementById("dateValue");
const descValue = document.getElementById("descValue");
const submitBtn = document.getElementById("submitBtn")

//Code for Time and Date
const months = ['January', 'February', "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let time = document.getElementById('dateNtime') //There is a span tag for time displayed
function addZero(i) {  //To add zero before single digits when needed
  if (i < 10) {i = "0" + i}
  return i;
}
function displayTimeDate () {
  let current = new Date();
  let cDate = `${current.getDate()}  ${months[current.getMonth()]}  ${current.getFullYear()} <br>`
  let cTime = addZero(current.getHours()) + ":" + addZero(current.getMinutes()) + ":" + addZero(current.getSeconds());
  let dateTime = cDate + ' ' + cTime;
  time.innerHTML = dateTime; 
}
setInterval(displayTimeDate, 1000);
//Code for Time and Date Over

submitBtn.addEventListener("click", (event) => {
  //event.preventDefault();
    validateForm();
  if (isFormValid() == true) {
    const taskss = new Task(inputValue.value, assignValue.value, statusValue.value, dateValue.value, descValue.value);
    console.log(taskss)
    Task.addTask(taskss);
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
class Task {
  constructor(task, asign, status, date, desc) {
    this.task = task;
    this.asign = asign;
    this.status =status;
    this.date = date;
    this.desc = desc;
    
  }
  static addTask(taskList) {
      
      const taskDetail =document.getElementById("taskDetail")
      const cardLi = document.createElement("ul");
      cardLi.classList.add("list")
      cardLi.innerHTML = 
       `<div class="col">
       <div class="card h-100 bg-warning">
         <div class="card-body" >
         <h5 class="card-title border-bottom">Task Name<br>${taskList.task}</h5>
         <p> <span class="fw-bold">Due Date:</span> ${taskList.date} </p>
         <p><span class="fw-bold">Asigned To:</span>${taskList.asign}</p>
         <p><span class="fw-bold">Status:</span>${taskList.status}</p>
         <p><span class="fw-bold">Description:</span>${taskList.desc}</p>
         <button class="bg-secondary border-0 text-white p-2 rounded" data-bs-toggle="modal" data-bs-target="#html-css">View Task</button>
        </div>
     </div>
     </div>
       
      `
       taskDetail.appendChild(cardLi)
    }
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

