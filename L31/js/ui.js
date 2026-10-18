function renderUsers(users, container){
    users.forEach(user => {
        const p = document.createElement('p');
        p.textContent = `${user.name}  - (${user.age})`;
        container.append(p);
    });
}

export const pi=3.14;
export default renderUsers;

//  user.js -> data->app.js ->calls -> ui.js -> DOM