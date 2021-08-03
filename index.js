/*
  ГЕНЕРАТОР - функция, которая имеет возможность приостанавливать свою работу и возвращать 
  промежуточный результат своей работы
*/
/*
const iterator = generate()

function * generate () {
  console.log(1)
  yield 10
  console.log(2)
  console.log(3)
  yield 20
  console.log(4)
  console.log(5)
  yield 30
  console.log(6)
  return 100
}

console.log('1 запуск next')
console.log(iterator.next())

console.log('2 запуск next')
console.log(iterator.next())

console.log('3 запуск next')
console.log(iterator.next())

console.log('4 запуск next')
console.log(iterator.next())
*/
/*
  Написать функцию-генератор, которая генерирует
  числа от 0 до maxStore. С каждым вызовом 
  метода next - число инкрементируется на 1
 */
/*
  function * generateNumbersSequence(maxStore = 250) {
    try{
      let store = 0;
      while(store <= maxStore) {
        yield store++
      }
    } catch(e) {
      console.log(e);
    }
  }

const iter = generateNumbersSequence(10)

for (const num of iter) {
   console.log(num);
   if(num === 10) {
     iter.throw("Generator is broken")
   }
}*/

function sum (a, b, c) {
  return a + b + c
}

function curriedSum (a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

curriedSum(1)(2)(3)

const curriedSum2 = a => b => c => a + b + c

function countPrice (price, amount, discount) {
  return price * amount - price * amount * discount
}

countPrice(10, 5, 0.1)

function curriedCountPrice (price) {
  return function (amount) {
    return function (discount) {
      return price * amount - price * amount * discount
    }
  }
}

//console.log(curriedCountPrice(100)(5)(0.05))
/*
const withPrice100 = curriedCountPrice(100);
const withPrice100AndAmount2 = withPrice100(2);

console.log(withPrice100AndAmount2(0.1))
console.log(withPrice100AndAmount2(0.3))
console.log(withPrice100AndAmount2(0.2))
console.log(withPrice100AndAmount2(0.05))
console.log(withPrice100AndAmount2(0.03))
console.log(withPrice100AndAmount2(0.25))
console.log(withPrice100AndAmount2(0.15))
console.log(withPrice100AndAmount2(0.11))
console.log(withPrice100AndAmount2(0.12))
*/
const logger = type => console[type]

const logInfo = info => logger('log')(info)
const logError = error => logger('error')(error)
const logTable = info => logger('table')(info)

logInfo('Some info')
logError('Some error')
logTable([
  { id: 1, name: 'John' },
  { id: 2, name: 'Bob' }
])
