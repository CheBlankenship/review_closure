
// Counter 1

function counter() {
  var result = num;

  function actuallyCounter() {
    result++;
    return result;
  }
  return actuallyCounter;
}

var counter1 = counter();
var counter2 = counter();

console.log(counter1());
console.log(counter2());

// counter2

function counter(num) {
  var result = num;
  console.log(result);
  function actuallyCounter() {
    result++;
    return result;
  }
  return actuallyCounter;
}

var counter1 = counter(4);
var counter2 = counter(1);

// console.log(counter1());
// console.log(counter2());

// Practice the example in the key

function secret() {
  var password = 'open seasame';
  function reveal() {
    return password;
  }
  return reveal;
}

var getPassword = secret();
// console.log(getPassword());

// Make it simple

function secret() {
  var password = "open seasame";
  function reveal() {
    return password;
  }
  return reveal();
}

// console.log(secret());


// closure example


function add(x){
  return function actuallyAdd(y) {
    return x + y;
  };
}


add(4)(5);
