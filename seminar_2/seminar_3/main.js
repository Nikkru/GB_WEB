// alert("Hi!!!");
// console.log('Привет!');
// let a = 5;
// console.log(a);
const a = Number.parseFloat(prompt("Введите число а"));
const b = Number.parseFloat(prompt("Введите число b"));
function sum(a, b) {
    return a + b;
}
alert(`Результат сложения чисел ${a} и ${b} = ${Math.round(sum(a, b)*100)/100}`)