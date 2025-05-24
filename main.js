let form = document.getElementById("myForm");
let status1 = document.getElementById("status");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    surname: form.surname.value,
    name: form.name.value,
    email: form.email.value,
    tel: form.tel.value,
    service: form.service.value
  };
  try {
    await fetch("https://script.google.com/macros/s/AKfycbxO_-p9iFwWRG4_-mCjU-rtSbJpx-Pj7viMtCC4DZ0GWd93fvs-vf8sblJDtXQX26xf/exec", {
      method: "POST",
      mode: "no-cors", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    status1.textContent = "Отправлено!";
    form.reset();
  } catch (err) {
    console.log(err);
    status1.textContent = "Ошибка отправки";
  }
});
/*
console.log(10%3);
console.log(100-20);



let a=1488;
let b=1161

a=52;
b=69;
console.log(a*b);

a=a+10;
let name1= prompt ("Как вас зовут?");
console.log("Привет, ", name1," ! Как дела?"); 

let a =  prompt("Введите длинну");
let b =  prompt("ВВедите ширину");
console.log("Периметр=",(a+b)*2);
console.log("Площадь=",a*b);
//Периметр - 50
//Площадь - 150

//Задача1 ДЗ
let c= Number (prompt("Введите год рождения"));
console.log("В 2050 году вам будет ",2050-c);
*/


/*
//Задача2 ДЗ
let b = Number(prompt("Введите количество минут"));
console.log("Перевод времен", 60 * b);
//В одной минуте - 60
//Количество минут - 5
*/
/*
//Введите ваш вес (кг): 70
//Вам нужно пить 2.1 литра воды в день.
let weight =  Number(prompt("Введите свой вес в кг: "));
console.log("Вам нужно пить ", weight*30/1000 , "литра воды в день"); 
*/


/*
let age = Number(prompt("Введите ваш возраст "));

if (age < 18 && age>0 ) { //условная конструкция 
    console.log("Вы несовершеннолетний"); //здесь пишем результат, если истинно условие 
} else if (age<0){
    console.log("Вы ввели отрицательное число");
}else{
    console.log("Вы совершеннолетний"); // результат, если условие ложно (не правдиво)
}
*/

/*
let temperature = parseFloat(prompt("Введите температуру воды в градусах"));


if (temp < 0) {
    console.log("Вода замерзла");
} else if (temperature >= 0 && temperature < 100) {
    console.log("Вода в жидком состоянии");
} else if (temp >= 100) {
    console.log("Вода кипит!");
} else {
    console.log("Некорректный ввод. Пожалуйста, введите число.");
}
*/
/*
let number = parseInt(prompt("Введите число:"));


if (number % 3 === 0 && number % 5 === 0) {
    console.log("Число кратно и 3, и 5");
} else if (number % 3 === 0) {
    console.log("Число кратно 3");
} else if (number % 5 === 0) {
    console.log("Число кратно 5");
} else {
    console.log("Число не кратно 3 и 5");
}
    
*/
/*
let color = prompt("Введите цвет светофора (зеленый, желтый, красный):").toLowerCase(); // А == а - false


if (color === "зеленый") {
    console.log("Можно идти!");
} else if (color === "желтый" || color == "красный") {
    console.log("Стой!");
} else {
    console.log("Ошибка! Такого цвета нет на светофоре.");
}
*/



/*
let number = prompt("Введите число:");


alert("Последняя цифра: " + (Number(number) % 10));
*/


/*
let age = Number(prompt("Пожалуйста, введите ваш возраст:"));


if (age >= 18 && age < 65) {
    console.log("Добро пожаловать в клуб!");
} else {
    console.log("Вход запрещен.");
}
*/



/*
let a = Number(prompt("Введите первое число:"));
let b = Number(prompt("Введите второе число:"));

if (a > b) {
    console.log("Первое число больше второго");
} else if (b > a) {
    console.log("Второе число больше первого");
} else {
    console.log("Числа равны");
}

*/

/*
for (let i=0; i<10; i++  ){
    console.log(i);
}


let N = Number(prompt("Введите число N"));
let sum = 0;

for (let i=0;i<=N;i+){
sum=sum+i;

}

console.log(sum);
/*
let v = Number(prompt("Введите число N:")); 
let sum = 1; // Переменная для хранения суммы

for (let i = 1; i <= v; i++) { // Перебираем числа от 0 до N
    if (i % 2 == 0) { // Проверяем, четное ли число
        sum = sum * i; // Если четное, добавляем к сумме
    }
}

console.log("Сумма четных чисел от 0 до " + v + " равна: " + sum); // Выводим результат
*/

//У пользователя запрашивают количество чисел N. Затем пользователь сам вводит числа с клавиатуры. Нужно найти самое большое число
//Введите число: 5
// 190
//9
//2000
//23
//44
//Самое большое число - 2000


/*
let a = Number(prompt("Введите число a:")); 
let bober = 1;

for (let i = 0; i <= a; i++){
    bober = bober*i;
}

console.log("Сумма четных чисел от 0 до " + a + " равна: " + bober);

*/


/*
let number = Number(prompt("Введите число:"));

if (number == number) {
    for (let i = 1; i <= 10; i++) {
        console.log(${ number } l ${ i } = ${ number * i});
    }
} else {
    console.log("Вы ввели не число!");
}
    */







/*
let o = Number(prompt("Введите число")); //Вывод чисел в обратном порядке
for (let i = o; i >= 0; i--) {
    console.log(i)
*/


/*
Пользователь вводит количество чисел N, затем N раз вводит сами числа. Найти количество четных чисел среди них.
*/

/*

let N = Number(prompt("Введите количество чисел"));
let k = 0;
for (let i = 0; i < N; i++) {

    let c = Number(prompt("Введите число"));
    if (c % 2 == 0) {
        k++;

    }

}
console.log (k); 

*/


/*
let a = Number(prompt("Сколько чисел вы хотите ввести?"));


let evenSum = 0, oddSum = 0;

for (let i = 1; i <= a; i++) {
    let number = Number(prompt(`Введите число ${i}:`));

    if (number % 2 === 0) {
        evenSum += number;
    } else {
        oddSum += number;
    }
}


console.log(`Сумма четных чисел: ${evenSum}`);
console.log(`Сумма нечетных чисел: ${oddSum}`);


*/


/*
for (let i = 10; i >= 1; i--) {
    console.log(i); 
}


console.log("Старт!");
*/

/*
let students = ["Соня", "Катя", "Макс", "Саша"];
let numbers = [10,593,33,0,10];


students.push("Маша");
students.unshift("Кирилл");


students.pop();//удаление первого элемента массива
students.shift()//УДАЛЕНИЕ элемента массива



let numbers = [10,593,-33,0, -10];
let sum = 0

for (let i=0; 1<numbers.length)
*/

/*
let fruits = ["Яблоко", "Банан", "Апельсин", "Груша", "Киви"];

alert(fruits[fruits.length - 1]); 

console.log(fruits[4]); 

fruits.pop(); 

fruits.unshift("Манго");

console.log(fruits); 
*/
/*
let N = Number(prompt("Введите кол-во чисел"));
let numbers = [];
for (let i=0; i<N;i++) {
    numbers.push(Number(prompt("Введите число")));
    sum+numbers[i];

    
}

console.log(numbers);
console.log("Сумма=", sum);
console.log("Cреднее значение =", sum/N);
*/
//Найдите наибольшее и наименьшее число из массива.

/*
let N = Number(prompt("Введите кол-во чисел"));
let numbers = [];
for (let i=0; i<N; i++){
    numbers.push(Number(prompt("Введите число")));

}
let min = numbers[0];
let max = numbers[0];
for (let i=1;i<numbers.length;i++) {
    if (numbers[i]<min) {min=numbers[i]} ;
    if (numbers[i]>max) {max=numbers[i]};

}
console.log (min,max);
*/
//Запросите у пользователя 10 чисел и выведите только отрицательные
/*
let a =  [];
for (let i=0;i<10;i++) {
    a[i]=Number(prompt("Введите число"));
     if (a[i]<0){
        console.log(a[i]);

     }
}
*/

/*
let max = numbers[0]; 
let min = numbers[0]; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i]; 
    if (numbers[i] < min) min = numbers[i];  
}

let diff = max - min; 

console.log("Максимум: " + max);
console.log("Минимум: " + min);
console.log("Разница: " + diff);
*/

/*
let colors = ["Lime","Aqua", "Salmon"];
let button = document.getElementById("changeColor");
let index = 0
button.addEventListener("nigg", function()) {
    document.body.style.backgroundColor = colors[index];
    index++;

}
*/
/*
let sum = 0;

for (let i = 0; i < 5; i++) {
  let num = prompt(`Введите число ${i + 1}:`);
  if (num % 2 === 0) sum += num;
}

console.log("Сумма чётных чисел:", sum);
*/
/*
const grades = [5, 4, 3, 5, 2, 5, 4];
let count = 0;

for (let i = 0; i < grades.length; i++) {
  if (grades[i] === 5) {
    count++;
  }
}

console.log(count); 
*/
