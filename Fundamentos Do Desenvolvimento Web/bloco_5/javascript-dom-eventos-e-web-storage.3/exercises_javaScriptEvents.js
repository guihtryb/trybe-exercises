const dezDaysList = [29, 30]

function createCalendarDays() {
  for (let index = 1; index <= 31; index += 1) {
    dezDaysList.push(index);
  }
}

createCalendarDays();

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerText = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function putDaysInCalendar() {
  const daysList = document.getElementById('days');
  for(let eachDay of dezDaysList) {
    const day = document.createElement('li');
    day.innerText = eachDay;
    day.className = 'days';
    daysList.appendChild(day);
    if (eachDay === 24 || eachDay === 25 || eachDay === 31) {
      day.classList.add("holiday");
    }
    if (eachDay === 4 || eachDay === 11 || eachDay === 18 || eachDay === 25) {
      day.classList.add("friday");
    }
  }
}
putDaysInCalendar();

function createHolidayButton(string) {
  const newButton = document.createElement('button');
  newButton.innerText = string;
  newButton.id = 'btn-holiday';
  const btnContainer = document.getElementsByClassName('buttons-container')[0];
  btnContainer.appendChild(newButton);
}

createHolidayButton('Feriados');

function changeHolidaysColor() {
  const holidays = document.getElementsByClassName('holiday');
  if (holidays[0].style.backgroundColor.includes('deeppink')) {
    for(let holiday of holidays) {
      holiday.style.backgroundColor = 'unset';
      holiday.style.color = 'grey'
    }
  } else {
    for(let holiday of holidays) {
      holiday.style.backgroundColor = 'deeppink';
      holiday.style.color = 'black'
    }
  }
}

document.getElementById('btn-holiday').addEventListener('click', changeHolidaysColor);

function createFridaysButton(string) {
  const newFridayButton = document.createElement('button');
  newFridayButton.id = 'btn-friday';
  newFridayButton.innerText = string;
  const btnContainer = document.getElementsByClassName('buttons-container')[0];
  btnContainer.appendChild(newFridayButton);
}

createFridaysButton('Sexta-feira');

let showFridaysAlreadyRequested = false;
function showFridays() {
  const fridays = document.getElementsByClassName('friday');
  let day = 4;
  if (!showFridaysAlreadyRequested) {
    for(let friday of fridays) {
      friday.innerText = 'Mufasa ON!'
    }
    showFridaysAlreadyRequested = true;
  } else {
    for(let friday of fridays) {
      friday.innerText = day;
      day < 25 ? day += 7: day = 4;
    }
    showFridaysAlreadyRequested = false;
  }
}

document.getElementById('btn-friday').addEventListener('click', showFridays);



function zoomOn() {
  const days = document.getElementsByClassName('days');
  for(let day of days) {
    day.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '25px'
    });
  }
}
zoomOn();

function zoomOut() {
  const days = document.getElementsByClassName('days');
  for(let day of days) {
    day.addEventListener('mouseleave', function(event) {
      event.target.style.fontSize = '20px';
    });
  }
}

zoomOut();

function addTaskToCalendar(task) {
  const myTasks = document.getElementsByClassName('my-tasks')[0];
  const newTask = document.createElement('span');
  newTask.innerText = task;
  myTasks.appendChild(newTask);
}
addTaskToCalendar('Work in the bee company');

function addDescriptionToTask(color) {
  const myTasks = document.getElementsByClassName('my-tasks')[0];
  const newDiv = document.createElement('div');
  newDiv.style.backgroundColor = color;
  newDiv.className = 'task';
  myTasks.appendChild(newDiv);
}

addDescriptionToTask('yellow');

function addTaskSelectedToTasks() {
  const tasks = document.getElementsByClassName('task');
  const myTasks = document.getElementsByClassName('my-tasks')[0];
  const infoIsSelected = document.createElement('span');
  myTasks.appendChild(infoIsSelected);
  for (task of tasks) {
    task.addEventListener('click', function(event) {
      if(event.target.className.includes('selected')) {
        event.target.classList.remove('selected');
        infoIsSelected.innerText = ''
      } else {
        event.target.classList.add('selected');
        infoIsSelected.innerText = ' ->Selected!'
      }      
    });  
  }
}
addTaskSelectedToTasks();


function addColorSubtitleToDay() {
  const days = document.getElementsByClassName('days');
  for (let day of days) {
    day.addEventListener('click', function(event) {
      const selected = document.getElementsByClassName('selected')[0];
      if(selected) {
        if(event.target.style.color.includes(selected.style.backgroundColor)) {
          event.target.style.color = 'rgb(119, 119, 119)';
        } else {
          event.target.style.color = selected.style.backgroundColor;
        }
      } 
      else null;
    });
  }
}


addColorSubtitleToDay();

function addAppointments() {
  const input = document.getElementById('task-input');
  const appointmentsButton = document.getElementById('btn-add');
  const appointmentsList = document.getElementsByClassName('task-list')[0];
  appointmentsButton.addEventListener('click', function() {
    const newAppointment = document.createElement('li')
    if (input.value) {
      newAppointment.innerText = input.value;
      appointmentsList.appendChild(newAppointment);  
      input.value = ''
    } else {
      alert('Digite algo!')
    }
  });
  input.addEventListener('keyup', function(e) {
    if (input.value.length > 0 && e.keyCode === 13) {
      let newAppointment = document.createElement('li')
      newAppointment.innerText = input.value;
  
      appointmentsList.appendChild(newAppointment);  
      input.value = '';
    }
  }); 
}
addAppointments();
