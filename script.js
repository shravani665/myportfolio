document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth"
    });
});
});

window.addEventListener("load", () => {
console.log("Welcome to Sandhya Bathini's Portfolio!");
});

const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Toggle Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.background = "#4a148c";
toggleBtn.style.color = "white";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.zIndex = "1000";
document.body.appendChild(toggleBtn);


toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");


if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "🌞 Light Mode";
} else {
    toggleBtn.innerText = "🌙 Toggle Dark Mode";
}
});


const style = document.createElement("style");
style.innerHTML = `
.dark-mode {
    background: #121212;
    color: white;
}

.dark-mode section {
    background: #1e1e1e;
    color: white;
    transition: background 0.3s, color 0.3s;
}

.dark-mode .skills span {
    background: #6a1b9a;
    color: white;
}

button:hover {
    opacity: 0.9;
}
`;
document.head.appendChild(style);
