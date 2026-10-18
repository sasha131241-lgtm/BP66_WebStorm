/**
 * Создаёт менеджер пользователей с использованием замыкания
 * @returns {Object} Объект с методами addUser и getUsers
 */
function createUserManager() {
    const users = [];

    return {
        addUser(user) {
            users.push(user);
        },
        getUsers() {
            return [...users];
        }
    };
}