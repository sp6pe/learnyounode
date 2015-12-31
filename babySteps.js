var arr = process.argv.slice(2);
//console.log(arr);
var sum =0;
for(i=0; i<arr.length; i++){
	sum += Number(arr[i]);
}
console.log(sum);