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
    console.log('res after first if = ' + res);
  	if(arg.hasChildNodes()){
  		var children = arg.childNodes;
		for(var i; i < children.length; i++){
  			if(typeof children[i] != 'undefined'){
  				scanner(children[i]);
  			}
  		}
  	}
  }
  scanner(document.body);

  console.log("res at completion is: " + res );
  console.log("res should equal: " + document.getElementsByClassName('targetClassName'));
  return res;
};
 