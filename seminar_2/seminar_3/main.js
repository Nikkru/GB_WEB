// alert("Hi!!!");
// console.log('Привет!');
// let a = 5;
// console.log(a);
// const a = Number.parseFloat(prompt("Введите число а"));
// const b = Number.parseFloat(prompt("Введите число b"));
// function sum(a, b) {
//     return a + b;
// }
// alert(`Результат сложения чисел ${a} и ${b} = ${Math.round(sum(a, b)*100)/100}`)

// task 3
/*
const userName = prompt("Enter your name, please");
function showMessage(name_) {
    console.log(`Привет, ${name_}!`);
}
showMessage(userName);
const a = confirm(`Вам хорошо живется?`);
function diolog(bool) {
    if (bool)
         console.log(`Тогда мы идем к вам!`);
         else
         console.log(`Ну вы там держитесь!`);
}
diolog(a);

confirm("Вам хорошо живется?") ? alert("Тогда мы идем к вам!") : alert("Ну вы держитесь там!")
*/

// task 4
const product = prompt("Введите название продукта")
switch (product) {
    case "Мандарины":
        alert("Мандарины стоят 100 рублей за колограмм")
        break
    case "Бананы":
        alert("Бананы и груши стоят 100 рублей за колограмм")
        break
    case "Груши":
        alert("Бананы и груши стоят 100 рублей за колограмм")
        break
    default:
        alert("Нет такого продукта")
}