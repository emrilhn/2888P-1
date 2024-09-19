async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    
    data.forEach((user) => {
      renderUserCard(user);  // user verisini fonksiyona gönderiyoruz
    });
  } catch (error) {
    console.log("Hata:", error);
  }
}

// kartlarını oluşturan fonksiyon
function renderUserCard(user) {
  const usersdiv = document.getElementById("users");
  const users = document.createElement("div");
  users.classList.add("col-lg-4", "col-md-6", "my-4");
  users.innerHTML = `
        <div class="card text-center border border-dark ">
        <div class="card-body cards">
          <h5 class="card-title"><i class="fa-regular fa-user"></i> ${user.name} ${user.username}</h5>
          <p class="card-text"><i class="fa-solid fa-location-dot"></i> ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
          <p class="card-text"><i class="fa-regular fa-building"></i> ${user.company.name}</p>
          <p class="card-text"><i class="fa-solid fa-square-phone"></i> ${user.phone}</p>
          <p class="card-text"><i class="fa-regular fa-envelope"></i> ${user.email}</p>
          <p class="card-text" style="text-decoration: underline;"><i class="fa-solid fa-globe"></i>  website : ${user.website}</p>
          <p class="card-text"><i class="fa-solid fa-id-card"></i> ID : ${user.id}</p>
        </div>
      </div>
      `;
  usersdiv.appendChild(users);
}

fetchUsers();  
