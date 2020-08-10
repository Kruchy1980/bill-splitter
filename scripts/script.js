// I.Variables

const price = document.querySelector('#price');

const people = document.querySelector('#people');

const tip = document.querySelector('#tip');

const costDisplay = document.querySelector('.cost');

const errorDisplay = document.querySelector('.error');

const calcButton = document.querySelector('.count');

const costInfo = document.querySelector('.cost-info');

// Functions
const showBill = () => {
    if (price.value === '') {
        errorDisplay.textContent = 'Fill up all fields Please!';
        costInfo.style.display = 'none';
    } else {
        countBill();
    }
};

const countBill = () => {
    const newPrice = Number(price.value);

    const newPeople = Number(people.value);
    const newTip = Number(tip.value);
    console.log(newPrice, newPeople, newTip);
    const sum = (newPrice + (newPrice * newTip)) / newPeople;
    costDisplay.textContent = sum.toFixed(2);
    costInfo.style.display = 'block';
    errorDisplay.style.display = 'none';

};

calcButton.addEventListener('click', showBill);