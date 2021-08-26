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
