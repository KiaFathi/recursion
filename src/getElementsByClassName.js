// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var res = [];
  var count1 = 0
  var count2 = 0;
  var scanner = function(arg){
  	var cur = arg;
  	if(cur.classList.length > 0){
  		for(var i = 0; i < arg.classList.length; i++){
  			if(arg.classList[i] == className){
  				res.push(arg);
  				console.log('res' + res);
  				count1 ++;
  				alert('gets to if1 times: ' + count1);
  			}
  		}
  	}
  	if(arg.hasChildNodes()){
  		var children = arg.childNodes;
  		console.log('These are the child nodes' + arg.childNodes);
		for(var i; i < children.length; i++){
			console.log('current scanning: ' + children[i]);
  			if(typeof children[i] != 'undefined'){
  				count2 ++;
  				alert('Get to if2 times: ' + count2);
  				scanner(children[i]);
  			}
  			
  		}
  	}
  }
  scanner(document.body);

  return res;
};
