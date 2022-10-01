// Задание 1
function getArrayParams(arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;
	// Ваш код
	for (let i = 0; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		};
		if (min > arr[i]) {
			min = arr[i];
		};
		sum += arr[i];
	}
	avg = sum / arr.length;
	avg = Number(avg.toFixed(2));
	return { min, max, avg };
};
// Задание 2
function worker(arr) {
	let sum = 0;
	// Ваш код
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	};
	return sum;
};
function makeWork(arrOfArr, func) {
	let max = -Infinity;
	let min = Infinity;
	// Ваш код
	for (let j = 0; j < arrOfArr.length; j++) {
		if (max < func(arrOfArr[j])) {
			max = func(arrOfArr[j]);
		};
		if (min > func(arrOfArr[j])) {
			min = func(arrOfArr[j]);
		};
	};
	return max;
};
// Задание 3
function worker2(arr) {
	let min = Infinity;
	let max = -Infinity;
  
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i] < min) {
		min = arr[i];
	  }
	  if (arr[i] > max) {
		max = arr[i];
	  }
	}
  
	return max - min;
  }
