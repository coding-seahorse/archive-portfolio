const body = document.querySelector("body");
const btn = document.querySelector(".fa-moon");

const getLightTheme = () => {

    body.classList.add("light-theme");
    localStorage.setItem("theme", "light");

};

const getDarkTheme = () => {

    body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");

};

localStorage.theme === "light" ? getLightTheme() : getDarkTheme();

btn.addEventListener('click', e => localStorage.getItem('theme') === 'light' ? getDarkTheme() : getLightTheme());