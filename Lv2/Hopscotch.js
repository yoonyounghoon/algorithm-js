function foo(func) {
  var res = func();
  return res;
}

function bar() {
  return "caller : " + bar.caller;
}

console.log(foo(bar));
console.log(bar());
