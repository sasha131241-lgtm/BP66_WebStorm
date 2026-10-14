console.log("task05 run");

const database =[];
let currentId = 0;

function saveProduct(title, price){
    if (typeof (title) !== "string"|| title.trim()==='')
        throw new Error("title must be a string");

    if (typeof (price) !== "number"|| price < 0)
        throw new Error("price must be a positive integer");

    database.push({
        id: ++currentId,
        title: title,
        price
    });
}

saveProduct('Apple', 12.5);
saveProduct('Orange', 15.5);
saveProduct('Cucumber', 8.9)

console.log(database);

try{
    saveProduct('Апельсин', -10);
} catch(error){
    console.log(error.message);
}

try{
    saveProduct('          ', 10.1);
}catch(error){
    console.log(error.message);
}
console.log("================");
console.log(database);

console.log("task05 end")