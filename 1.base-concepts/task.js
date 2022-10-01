"use strict"

function solveEquation(a, b, c) {
	let arr;
	// код для задачи №1 писать здесь
	let D = b ** 2 - 4 * a * c;
	let x1;
	let x2;

	if (D === 0) {
		x1 = -b / (2 * a);
		arr = [x1];
	} else if (D < 0) {
		arr = [];
	} else {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		arr = [x1, x2];
	}

	return arr; // array
}

let dateNow = new Date();

function calculateTotalMortgage(percent, contribution, amount, date) {
	let totalAmount;

	// код для задачи №2 писать здесь


	if (isNaN(Number(percent)) === true) {
		return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`)
	} else if (isNaN(Number(contribution)) === true) {
		return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`)
	} else if (isNaN(Number(amount)) === true) {
		return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`)
	}

	let S = amount - contribution;
	let P = (percent / 12) / 100;
	let n;
	let monthlyPayment;

	if (date.getFullYear() < dateNow.getFullYear() || date.getFullYear() === dateNow.getFullYear() && date.getMonth() <= dateNow.getMonth()) {
		alert('Ошибка ввода даты');
	} else if (date.getFullYear() === dateNow.getFullYear() && date.getMonth() <= dateNow.getMonth()) {
		n = ((date.getFullYear() - dateNow.getFullYear()) * 12) + (dateNow.getMonth() - date.getMonth());
		console.log(n);
	} else if (date.getFullYear() === dateNow.getFullYear() && date.getMonth() > dateNow.getMonth()) {
		n = ((date.getFullYear() - dateNow.getFullYear()) * 12) + (date.getMonth() - dateNow.getMonth());
		console.log(n);
	} else {
		n = ((date.getFullYear() - dateNow.getFullYear() - 1) * 12) + (12 - dateNow.getMonth()) + date.getMonth();
		console.log(n);
	}

	monthlyPayment = S * (P + P / (((1 + P) ** n) - 1));

	totalAmount = monthlyPayment * n;

	totalAmount = Number(totalAmount.toFixed(2));

	console.log(`Полная сумма кредита: ${totalAmount}`);

	return totalAmount;
}