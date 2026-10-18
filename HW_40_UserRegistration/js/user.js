// Счётчик для генерации уникальных ID
let idCounter = 1;

/**
 * Создаёт объект пользователя с проверкой данных
 * @param {Object} userData - Данные пользователя (name, age, ...)
 * @returns {Object} Новый объект пользователя
 */
function createUser(userData) {
    const { name, age, ...rest } = userData;


    if (name === undefined || name === null || String(name).trim() === "") {
        throw new Error("Name is required");
    }

    const trimmedName = String(name).trim();

    if (age === undefined || age === null || age === "") {
        throw new Error("Age is required");
    }

    const parsedAge = Number(age);

    if (
        Number.isNaN(parsedAge) ||
        !Number.isInteger(parsedAge) ||
        parsedAge < 0 ||
        parsedAge > 120
    ) {
        throw new Error("Invalid age");
    }

    return {
        id: idCounter++,
        name: trimmedName,
        age: parsedAge,
        ...rest
    };
}