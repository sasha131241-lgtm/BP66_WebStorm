console.log("task04 run")

function getSum(number1,number2){
    if (typeof number1 !== "number" || typeof number2 !== "number"){
        throw new Error("Invalid number");
    }
    const sum = number1 + number2;
    return sum;
}

const value2 = 10;

try{
    const value1 = 5;
    const result = getSum(value1,value2);
    console.log(result);
}catch (error){
    console.log(`Ошибка при запуске getSum! ${error.message}`);
}

try{
    const value1 = "Hello";
    const result = getSum(value1,value2);
    console.log(result);
}catch (error){
    console.log(`Ошибка при запуске getSum! ${error.message}`);
}

try{
    const value1 = undefined;
    const result = getSum(value1,value2);
    console.log(result);
}catch (error){
    console.log(`Ошибка при запуске getSum! ${error.message}`);
}



console.log("task04 end")