module.exports = function longestConsecutiveLength(array) {
  var obj = new Object();
  var max = 1;
  var count = 1;

  for (var i = 0; i < array.length; i++) {
    obj[array[i]] = array[i];
  }

  var arr_keys = Object.keys(obj);

  if(arr_keys.length === 0){
    return 0;
  }

  for (var i = 0; i < arr_keys.length; i++) {
    arr_keys[i] = parseInt(arr_keys[i], 10);
  }

  for (var j = 0; j < arr_keys.length; j++) {
    if (arr_keys[j] + 1 === arr_keys[j + 1]) {
      count++;
      if (count > max) {
        max = count;
      }
    } else {
      count = 1;
    }
  }
  return max;
}
