function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputValue: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesDiv: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

let initialBoxWidth = 30;

function onCreateBtnClick() {
  const amount = Number(refs.inputValue.value);
  createBoxes(amount);
};

function onDestroyBtnClick() {
  refs.boxesDiv.innerHTML = '';
  initialBoxWidth = 30;
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${initialBoxWidth + i * 10}px`;
    newBox.style.height = newBox.style.width;
    newBox.style.margin = `10px`;
    newBox.style.backgroundColor = getRandomHexColor();
    refs.boxesDiv.append(newBox);
  };
  accumulateValues()
};

function accumulateValues() {
  if (refs.boxesDiv.lastElementChild !== null) {
    let lastBoxWidth = refs.boxesDiv.lastElementChild.style.width;
    initialBoxWidth = Number.parseInt(lastBoxWidth) + 10;
  };
};

// Я впевнена, що має бути значно простіше і лаконічніше рішення, ніж моє.
// Якщо матимете час, напишіть мені, будь ласка :)