var p = process.argv ;
var res = 0;
for(var i=2;i<p.length;i++){
	res += Number(p[i]);
}
console.log(res);	