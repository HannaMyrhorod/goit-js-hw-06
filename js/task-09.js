function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  colorName: document.querySelector('.color'),
  body: document.querySelector('body')
}

refs.changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  refs.colorName.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.colorName.textContent;
}