const states = [
  { 'AC': 'Acre' },
  { 'AL': 'Alagoas' },
  { 'AP': 'Amapá' },
  { 'AM': 'Amazonas' },
  { 'BA': 'Bahia' },
  { 'CE': 'Ceará' },
  { 'DF': 'Distrito Federal' },
  { 'ES': 'Espírito Santo' },
  { 'GO': 'Goías' },
  { 'MA': 'Maranhão' },
  { 'MT': 'Mato Grosso' },
  { 'MS': 'Mato Grosso do Sul' },
  { 'MG': 'Minas Gerais' },
  { 'PA': 'Pará' },
  { 'PB': 'Paraíba' },
  { 'PR': 'Paraná' },
  { 'PE': 'Pernambuco' },
  { 'PI': 'Piauí' },
  { 'RJ': 'Rio de Janeiro' },
  { 'RN': 'Rio Grande do Norte' },
  { 'RS': 'Rio Grande do Sul' },
  { 'RO': 'Rondônia' },
  { 'RR': 'Roraíma' },
  { 'SC': 'Santa Catarina' },
  { 'SP': 'São Paulo' },
  { 'SE': 'Sergipe' },
  { 'TO': 'Tocantins' },
];

window.onload = function() {
console.log('it`s working!');

function addOptionsToSelect() {
    const select = document.getElementById('states');
    for(state of states) {
      const option = document.createElement('option');
      option.innerText = `${Object.keys(state)} -${Object.values(state)}`
      select.appendChild(option);
    }
  }

addOptionsToSelect();
}

// console.log(dataInput);
function verifieData() {
  const dataInput = document.getElementById('initData');
  const dataInputValue = dataInput.value;
  if(dataInputValue.length > 0) {
  const correctFormat = dataInputValue.includes('/') 
  if(!correctFormat) return alert('Incorrect date format!')
  let splittedData = dataInputValue.split('/');
  
  let day = splittedData[0];
  let month = splittedData[1];
  let year = splittedData[2];

  if(day < 0 || day > 30) return alert('Invalid day');

  if(month < 0 || month > 12) return alert('Invalid mounth');

  if(year < 0) return alert('Invalid year');
  }
  else null;
}


const submitButton = document.getElementById('submit');
submitButton.addEventListener("click", verifieData);

