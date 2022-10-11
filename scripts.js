const body = document.querySelector("body");
const btn = document.querySelector(".fa-moon");

btn.addEventListener('click', function(){
    body.classList.toggle("dark-mode")
});