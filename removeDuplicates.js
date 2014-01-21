
function removeDuplicates(arr) 
{
  var results = [];
  for (var i = 0; i < arr.length; i++) {results[arr[i]] = null;}
  return Object.keys(results);
}
