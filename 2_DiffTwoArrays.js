
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  // Same, same; but different.
  var filteredArray = newArr.filter(function(value) {
  	if (arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1) {
  		return true;
  	} else {
  		return false;
  	}
  });

  return filteredArray;
}

var output = diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);

debug(output);