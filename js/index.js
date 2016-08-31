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
  var a = 1;
  var b = 0;
  var array = [];
  var result = 0;

  for (var i = 0; i < 33; i++) {
    result = a;
    a = a + b;
    b = result;
    array.push(b);
  }

  var c = 1;
  var d = 0;
  var fibSum = 0;
  var result2 = 0;
  for (var j = 0; j < 33; j++) {
    result2 = c;
    c = c + d;
    d = result2;
    if (d % 2 === 0) {
      fibSum += d;
    };
  }

  document.getElementById('fibonacciSeq').innerHTML = "<p><strong>This is the sequence:</strong></p><h5>" + array + "</h5>";
  document.getElementById('fibSum').innerHTML = "<p><strong>This is the sum of all even numbers:</strong></p><h1>" + fibSum + "</h1>";

}