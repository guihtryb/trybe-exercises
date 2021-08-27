window.onload = function() {
const paragraphs = document.getElementsByClassName('paragraph');

function changeBackgroundColor(color) {
  let content = document.getElementsByClassName('content')[0];
  content.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
}
function setBackgroundColor() {
  const backgroundColorBtns = document.querySelectorAll("#background-color>button");
  for(let button of backgroundColorBtns) {
    button.addEventListener('click', function(event) {
      if(event.target.innerText === 'dark') changeBackgroundColor('#212121')
      changeBackgroundColor(event.target.innerText);
    });
  }
}
setBackgroundColor();

function changeTextColor(color) {
  for(let paragraph of paragraphs) {
    paragraph.style.color = color;
  }
  localStorage.setItem('textColor', color);
}
function setTextColor() {
  let changeColorsBtn = document.querySelectorAll('#text-color>button');
  for(let button of changeColorsBtn) {
    button.addEventListener('click', function(event) {
      changeTextColor(event.target.innerText);
    });
  }
}
setTextColor();

function changeFontSize(size) {
  for(let paragraph of paragraphs) {
    paragraph.style.fontSize = size;
  }
  localStorage.setItem('fontSize', size);
}

function setFontSize() {
const fontSizeBtns = document.querySelectorAll('#font-size>button');
  for(let button of fontSizeBtns) {
    button.addEventListener('click', function(event) {
      changeFontSize(event.target.innerText);
    });
  }
}
setFontSize();

function changeLineHeight(lineHeight) {
  for(let paragraph of paragraphs) {
    paragraph.style.lineHeight = lineHeight;
  }
  localStorage.setItem('lineHeight', lineHeight);
}
function setLineHeight() {
  const lineHeightBtns = document.querySelectorAll('#line-height>button');
  for(let button of lineHeightBtns) {
    button.addEventListener('click', function(event) {
      changeLineHeight(event.target.innerText);
    });
  }
}
setLineHeight();

function changeFontFamily(family) {
  for(let paragraph of paragraphs) {
    paragraph.style.fontFamily = family
  }
  localStorage.setItem('fontFamily', family);
}

function setFontFamily() {
  const fontFamilyBtns = document.querySelectorAll('#font-family>button');
  for (let button of fontFamilyBtns) {
    button.addEventListener('click', function(event) {
      changeFontFamily(event.target.innerText);
    });
  }
}
setFontFamily();

function initializingPage() {
  const backgroundColor = localStorage.getItem('backgroundColor');
  const textColor = localStorage.getItem('textColor');
  const lineHeight = localStorage.getItem('lineHeight')
  const fontSize = localStorage.getItem('fontSize');
  const fontFamily = localStorage.getItem('fontFamily');

  changeBackgroundColor(backgroundColor);
  changeTextColor(textColor);
  changeLineHeight(lineHeight);
  changeFontSize(fontSize);
  changeFontFamily(fontFamily);
  console.log(backgroundColor);
  console.log(textColor);
  console.log(lineHeight);
  console.log(fontSize);
  console.log(fontFamily);
}
initializingPage();
}



