function call(func) {
  func();
}

function callTwice(func) {
  func();
  func();
}

function callXTimes(func, num) {
  for(let i = 0; i<num; i++){
    func();
  }
}

function returnFromFunc(func) {
  return func();
}

function modifyString(str, func) {
return func(str);

}

function modifyNumber(num, func) {
  return func(num);
}

function modifyAnything(anything, func) {
return func(anything);

}

function twoFuncs(func1, func2) {
  return func2(func1());
}

function twoValues(num1, num2, func) {
  return func(num1, num2);
}

function twoValuesRTL(num1, num2, func) {
  return func (num2, num1);
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  twoValues,
  twoValuesRTL,
}