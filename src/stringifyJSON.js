// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here
  var res;
  if(typeof obj === 'number'){
  	res = obj.toString();
  }else if(typeof obj === 'object'){
  	res = "" + obj + "";
  }else if(typeof obj === 'undefined'){
  	res = 'undefined';
  }else if(typeof obj === 'boolean'){
  	res = obj.toString();
  }else if(typeof obj === 'string'){
  	res = '"' + obj + '"';
  }
  return res;
};
