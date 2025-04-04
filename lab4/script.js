document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("users-list");
    const searchInput = document.getElementById("search");
    const toggleButton = document.getElementById("toggleButton");
    let users = [];
    let isUsersVisible = false;

    toggleButton.addEventListener("click", () => {
        isUsersVisible = !isUsersVisible;
        if (isUsersVisible) {
            toggleButton.textContent = "Ocultar Usuarios";
            searchInput.style.display = "block";
            if (users.length === 0) {
                fetchUsers();
            } else {
                renderUsers(users);
            }
        } else {
            toggleButton.textContent = "Mostrar Usuarios";
            searchInput.style.display = "none";
            userList.innerHTML = "";
        }
    });

    function fetchUsers() {
        fetch("https://reqres.in/api/users")
            .then(response => response.json())
            .then(data => {
                users = data.data;
                renderUsers(users);
            })
            .catch(error => console.error("Error fetching users:", error));
    }

    function renderUsers(users) {
        userList.innerHTML = "";
        users.forEach(user => {
            const userCard = document.createElement("div");
            userCard.classList.add("user-card");

            userCard.innerHTML = `
                <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
                <div>
                    <h2>${user.first_name} ${user.last_name}</h2>
                    <p>${user.email}</p>
                </div>
            `;
            userList.appendChild(userCard);
        });
    }

    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredUsers = users.filter(user => 
            user.first_name.toLowerCase().includes(searchTerm)
        );
        renderUsers(filteredUsers);
    });
});