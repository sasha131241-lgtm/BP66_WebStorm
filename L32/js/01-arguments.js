function greet(name){
    console.log(`Hello ${name}`);
}

greet("John");

function calculatePrice(price,quality){
    return price * quality;
}

console.log(calculatePrice(100,3)); // 300

function subtract(a,b){
    return a - b;
}

console.log(subtract( 10, 5)) //5
console.log(subtract(5,10)) // -5

function showUser(name, age){
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
}

showUser("John", );// Anna undefined
showUser('Anna ', 25)

function greet1(name = "Guest"){
    console.log(`Hello ${name}`);
}

greet1('Anna'); //Anna
greet1();//Guest
greet1(undefined); // Guest
greet1(null) // null
greet1("") // пустая строка

console.log("===========RestParams==========")

function sum(...numbers){  // массив остаточных элементов
    console.log(numbers);
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}

console.log(sum(5));
console.log(sum(5,10,15));
console.log(sum(1,2,3,4,5,6,7));


function showProducts(category,...products){
    console.log(`Category: ${category}`);
    console.log(products);
}

showProducts("Electronics","TV","Phone","Laptop")
showProducts("Clothes","Shirt","Pants","Shoes")

console.log("==========arguments Устаревшее решение==========")

function showArguments() {
    console.log(arguments); // 1,2,3,4,5,6,7
    console.log(arguments.length) // 7
}

showArguments(1,2,3,4,5,6,7)

console.log("==========arguments Псевдомассив Устаревшее решение==========")
//  у него очень мало доступных методов
// его нет в стрелочных функциях

function test(a =5, ...rest){
    console.log(a);
    console.log(rest);
}

test(undefined ,10,20)