
function sumAll(arr) {
	var min = Math.min(arr[0], arr[1]);
	var max = Math.max(arr[0], arr[1]);

	var length = max - min;

	var sum = 0;

	for(i = 0; i <= length; i++) {
		sum += i + min;
	}

	return sum;
}

var output = sumAll([5, 10]);

debug(output);