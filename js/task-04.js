const refs = {
    counterValue: 0,
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
};

function updateCounterValue() {
    document.querySelector('#value').textContent = refs.counterValue;
};

function onDecrementBtnClick() {
    refs.counterValue += 1;
    updateCounterValue();
};

function onIncrementBtnClick() {
    refs.counterValue -= 1;
    updateCounterValue();
};

refs.incrementBtn.addEventListener("click", onDecrementBtnClick);
refs.decrementBtn.addEventListener("click", onIncrementBtnClick);