let arr = [1,2,3,,,,,,,,,,,,,,,,,,,4,5,6];

var filtered = arr.filter(function (element) {
  return element != null;
});

console.log(filtered);

console.log(arr);