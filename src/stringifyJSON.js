// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here
  var res;
  if(obj === null){
  	res = "null";
  }else if(typeof obj === 'number'){
  	res = obj.toString();
  }else if(typeof obj === 'boolean'){
  	res = obj.toString();
  }else if(typeof obj === 'undefined'){
  	res = 'undefined';
  }else if(typeof obj === 'string'){
  	res = '"' + obj + '"';
  }else if(typeof obj === 'object'){
  	if(obj.length >= 0){
  		var str = ""
  		for(var i = 0; i < obj.length; i++){
  			var cur = obj[i];
  			if(i === 0){
  				str += stringifyJSON(cur);
  			}else{
  				str += "," + stringifyJSON(cur);
  			}	
  		}
  		res = "[" + str + "]";
  	}else{
  		res = obj.toString();
  	}
  }
  return res;
};
