document.addEventListener("DOMContentLoaded", () => {
    const userManager = createUserManager();

    const form = document.getElementById("registrationForm");
    const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");
    const errorDiv = document.getElementById("errorMessage");
    const usersListContainer = document.getElementById("usersList");

    /**
     * Функция отрисовки списка пользователей на странице
     */
    const renderUsers = () => {
        const users = userManager.getUsers();

        // Очищаем старое содержимое контейнера
        usersListContainer.replaceChildren();

        users.forEach((user) => {
            const { name, age } = user;

            const userCard = document.createElement("div");
            userCard.className = "user-card";

            // Использование textContent (запрещено использовать innerHTML для данных)
            userCard.textContent = `${name}, ${age} years old`;

            usersListContainer.append(userCard);
        });
    };

    /**
     * Обработчик отправки формы (нажатия кнопки Register)
     */
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        // Скрываем предыдущие ошибки перед новой попыткой
        errorDiv.classList.add("hidden");
        errorDiv.textContent = "";

        try {
            const rawName = nameInput.value;
            const rawAge = ageInput.value;

            if (rawAge.trim() === "") {
                throw new Error("Age is required");
            }

            const newUser = createUser({
                name: rawName,
                age: Number(rawAge)
            });

            userManager.addUser(newUser);

            renderUsers();

            console.log("User successfully registered:", newUser);

            form.reset();
            nameInput.focus();

        } catch (error) {
            console.error("Registration error:", error.message);

            errorDiv.textContent = error.message;
            errorDiv.classList.remove("hidden");

        } finally {
            console.log("Registration attempt completed");
        }
    });
});