function cachingDecoratorNew(func) {
	// Ваш код
	let cache = [];

	function wrapper(...args) {

		const hash = args.join(',');

		const idx = cache.findIndex(item => item.hash === hash);
		let result = func(...args);
		cache.push({ hash: hash, result: result });

		if (idx !== -1) {
			console.log("Из кэша: " + result);
			return "Из кэша: " + result;
		};

		if (cache.length > 5) {
			cache.shift();
		};

		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	};

	return wrapper;
};





function debounceDecoratorNew(func, ms) {
	// Ваш код
	let isThrottled = false;
	let timeout;

	function wrapper(...args) {
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			isThrottled = false;
			func.apply(this, args);
		}, ms);

		if (isThrottled) return;

		func.apply(this, args);
		isThrottled = true;
	};
	return wrapper;
};



function debounceDecorator2(func, ms) {
	// Ваш код
	let isThrottled = false;
	let timeout;
	wrapper.count = 0;

	function wrapper(...args) {

		clearTimeout(timeout);

		timeout = setTimeout(() => {
			isThrottled = false;
			func.apply(this, args);
			wrapper.count++;
		}, ms);

		if (isThrottled) {
			return;
		};

		func.apply(this, args);
		wrapper.count++;
		isThrottled = true;

		console.log(wrapper.count);
	};
	return wrapper;
};
