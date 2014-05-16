// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var res = [];
  var scanner = function(arg){
  	if(arg.classList != undefined && arg.classList.length > 0){
      if(arg.classList.contains(className)){
  			res.push(arg);
  		}
  	}
  	if(arg.hasChildNodes()){
  		var children = arg.childNodes;
		for(var node in children){
  			if(typeof children[node] == 'object'){
  				scanner(children[node]);
  			}
  		}
  	}
  }
  scanner(document.body);
  return res;
};
 