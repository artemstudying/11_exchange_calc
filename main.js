
let submit = document.querySelector('#submit');
let options = document.getElementsByTagName('option');

function exchangeCount(selectedOperation, purchaseCourse, saleCourse){
  let purchase = 0;
  let resultOfExchanging = 0;
  let summ = document.getElementById('summ').value;

  if (selectedOperation === purchase){
    resultOfExchanging = summ * purchaseCourse;
  }else {
    resultOfExchanging = summ * saleCourse;
  }
  return resultOfExchanging;
};

function exchangeFunc(tvent) {
  event.preventDefault();
  let usd = 0;
  let eu = 1;
  let result = 0;
  let selectedCurrency = document.getElementById('mySelect').selectedIndex;
  let selectedOperation = document.getElementById('selectedOperation').selectedIndex;

  if (selectedCurrency === usd){
    let purchaseCourse = 26;
    let saleCourse = 25;
    result = exchangeCount(selectedOperation, purchaseCourse, saleCourse);
    console.log(result);
  }else if (selectedCurrency === eu){
    let purchaseCourse = 31;
    let saleCourse = 30;
    result = exchangeCount(selectedOperation, purchaseCourse, saleCourse);
  }
  document.getElementById('result').innerHTML = result;
};

submit.addEventListener('click', exchangeFunc);
