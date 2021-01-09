//currying
function curry(a) {
  return function(b) {
      if(arguments.length>0){
      return curry(a+b);
      }
      else {
      return a;
      }
  }
}

curry(1)(2)();

