var fs = require('fs');

fs.readdir(process.argv[2],function(err, files){
	var f = files.filter(checkExtension);
	for(var i=0;i<f.length;i++){
		console.log(f[i]);
	}
});

function checkExtension(file) {
  var fileSplitted = file.split(".");
  if(fileSplitted[1] == process.argv[3]){
  	return true;
  }
  return false;
}