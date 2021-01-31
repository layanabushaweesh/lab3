

function getName() {
    var serviceName = prompt('Enter your service ?');
    console.log(typeof prompt);
    console.log(serviceName);
    for (var i = 0; i <= 5; i++) {
      console.log(i);
    }
  }
  
  getName();
 
  var getSum = function (a, b) {
    var c = a + b;
   
    return c;
  };
  
  var sum = getSum(10, 4);
  alert(sum);
  
  document.write(sum);
  