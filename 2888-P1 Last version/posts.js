const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

// Eğer userId varsa <h> etiketini gizliyoruz
if (userId) {
    const header = document.querySelector('h5');
    if (header) {
        header.style.display = 'none';  
    }
}

async function fetchPosts() {
    
    const response = await  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userdata = await response.json();
    
    try {
        userdata.forEach((idpost) => {
        RenderUseridDatas(idpost)
        });
    } catch (err) {
        console.log("Hata:", err);
    }
}

function RenderUseridDatas(idpost) {
    const posts = document.getElementById("posts");
    const postdiv = document.createElement("div");
    postdiv.classList.add("col-lg-3", "col-md-6", "my-3");
    postdiv.innerHTML = `
    <div class="card text-center" style="height: 220px; overflow: hidden;">
    <div class="card-body">
    <h5 class="card-title">${idpost.title}</h5>
    <p class="card-text">${idpost.body}</p>
    </div>
    </div>
    `;
    posts.appendChild(postdiv);
}  

fetchPosts();


document.getElementById("toggleButton").addEventListener("click", function() {
    const userInput = prompt("1-10 arasında bir rakam giriniz:");

    if (userInput && !isNaN(userInput) && userInput >= 1 && userInput <= 10) {
        const idUrl = `posts.html?userId=${userInput}`;
        window.location.href = idUrl;  // Sayfayı yönlendirme
    } else {
        alert("Geçersiz bir giriş yaptınız. Lütfen 1-10 arasında bir rakam giriniz.");
    }
});
