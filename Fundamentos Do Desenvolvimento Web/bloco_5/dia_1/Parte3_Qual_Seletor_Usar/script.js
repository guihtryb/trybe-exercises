// cabeçalho
document.querySelector("#header-container").style.backgroundColor = "green";

//emergency tasks - urgente e importante
let emergencyTasks = document.querySelectorAll("h3");
for (let i = 0; i < emergencyTasks.length; i += 1 ) {
    emergencyTasks[i].style.backgroundColor = "deeppink";
}
let emergencyTasksDiv = document.querySelectorAll(".emergency-tasks div");
for (let index = 0; index < emergencyTasksDiv.length; index += 1) {
    emergencyTasksDiv[index].style.paddingTop = "3px";
    emergencyTasksDiv[index].style.backgroundColor = "LightPink";
}

//No-emergency tasks - Não-Urgente e importante
document.getElementsByTagName("div")[2].style.backgroundColor = "yellow";
document.getElementsByTagName("div")[2].style.paddingTop = "3px";
document.getElementsByTagName("div")[3].style.backgroundColor = "yellow";
document.getElementsByTagName("div")[3].style.paddingTop = " 2px";
let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3");
for(let i = 0; i < noEmergencyTasks.length; i += 1) {
    noEmergencyTasks[i].style.backgroundColor = "black"; 
}

document.querySelector("#footer-container").style.backgroundColor = "DarkSlateGray";
