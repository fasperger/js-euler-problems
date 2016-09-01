/* ------------------- 1st problem ---------------------------------------------------*/
document.getElementById('myBtnOne').onclick = eulerFunct;

function eulerFunct() {
  var eulerSum = 0;
  for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      eulerSum += i;
    }
  }
  document.getElementById('eulerSum').innerHTML = "<h1>" + eulerSum + "</h1>";
}

/* ------------------- 2nd problem ---------------------------------------------------*/
document.getElementById('myBtnTwo').onclick = fibonacciFunct;

function fibonacciFunct() {
  var a = 1,
    b = 0,
    array = [],
    result = 0;

  for (var i = 0; i < 33; i++) {
    result = a;
    a = a + b;
    b = result;
    array.push(b);
  }

  var c = 1,
    d = 0,
    fibSum = 0,
    result2 = 0;
  for (var j = 0; j < 33; j++) {
    result2 = c;
    c = c + d;
    d = result2;
    if (d % 2 === 0) {
      fibSum += d;
    }
  }

  document.getElementById('fibonacciSeq').innerHTML = "<p><strong>This is the sequence:</strong></p><h5>" + array + "</h5>";
  document.getElementById('fibSum').innerHTML = "<p><strong>This is the sum of all even numbers:</strong></p><h1>" + fibSum + "</h1>";

}

/* ------------------- 3rd problem ---------------------------------------------------*/
document.getElementById('myBtnThree').onclick = lgPrimeFunct;

function lgPrimeFunct() {
  var primeFactor = [],
    notPrime = [],
    result3 = 0;
  
  for (var i = 0; i < 1000; i++) {
    if (i > 2 && i % 2 === 0 ||  i > 3 && i % 3 === 0 ||  i > 5 && i % 5 === 0 ||  i > 7 && i % 7 === 0) {
      notPrime.push(i);
    } else {
      primeFactor.push(i);
    }
  }
  for (var x = 0; x <= primeFactor.length; x++) {
    if (primeFactor[x] > 0 && 1000 % primeFactor[x] === 0) {
      result3 = primeFactor[x];
    }
  }
  document.getElementById('primeSeq').innerHTML = "<h6><small>" + primeFactor + "</small></h6>";
  document.getElementById('lgPrime').innerHTML = "<p> The largest prime factor is: </p>" + result3;
}