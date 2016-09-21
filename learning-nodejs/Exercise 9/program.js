var http = require('http')
var bl = require('bl')
var res = [];
var count = 0;

function showData(){
	for(var i=0;i<3;i++){
		console.log(res[i]);
	}
}

function httpGET(index){
	http.get(process.argv[2+index], function (response) {
	  response.pipe(bl(function (err, data) {
	    if (err)
	      return console.error(err)
	  
	    data = data.toString();
	    res[index] = data;
	    count++

      if (count == 3)
        showData()
	  })) 
	})
}

for(var i=0;i<3;i++){
	httpGET(i);
}
