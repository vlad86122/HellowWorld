//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2
const firstiPhoneYear = 2007;
alert(firstiPhoneYear);

//Задание 3
const javascriptCreatorName = `Брендан Айк`;
alert(javascriptCreatorName);

//Задание 4
let c = 10;
let b = 2;
alert(`Сумма: ${c + b} Разность: ${c - b} Произведение: ${c * b} Частное: ${c / b}`);

//Задание 5
let result = Math.pow(2, 5);
alert(result);

//Задание 6
alert(9 % 2);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8
let age = prompt(`Сколько вам лет?`);
alert(`Вам ${age}`);

//Задание 9
const user = {
name: 'vlad', 
age: 21,
isAdmin: false,
};

//Задание 9.1

user[`cityOfResidence`] = `Moscow`

//Задание 9.2
user.age = 30

//Задание 9.3
delete user[`cityOfResidence`]

//Задание 9.4
let info = prompt(`Какую информацию хотите узнать o пользователе?`);

while (info !== "age" && info !== "isAdmin" && info !=="name") {
  info = prompt("Введите корректное значение. Вы можете ввести 'age', 'isAdmin' или 'name':");
}

if (info == "age") {
  alert(`Возраст пользователя: ` + user.age);
} else if (info == "isAdmin") {
  alert(`Является ли пользователь администратором: ` + (user.isAdmin ? "Да" : "Нет"));
} else {
  alert(`Имя пользователя: ` + user.name);
}

//Задание 10
let userName;
userName = prompt(`Как вас зовут?`);
alert(`Привет, ${userName}  !`)