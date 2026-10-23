// Frontend Starter Camp Day 2 - script.js
// File ini terhubung ke index.html lewat <script src="script.js" defer>.


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
addEventListener("click", function() {
    navLinks.classList.toggle("open");
})

const darkToggle = document.querySelector(".dark-toggle");
darkToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark");
})


const menuItems = document.querySelectorAll(".menu-item");
const previewLink = document.getElementById("preview-link");
const previewImg = document.getElementById("preview-img");
const previewTitle = document.getElementById("preview-title");
const previewDesc = document.getElementById("preview-desc");

menuItems.forEach(function(item) {
    item.addEventListener("click", function() {
        menuItems.forEach(function(menu) {
            menu.classList.remove("active");
        });

        item.classList.add("active");

        previewImg.src = item.dataset.img;
        previewImg.alt = item.dataset.title;
        previewTitle.textContent = item.dataset.title;
        previewDesc.textContent = item.dataset.desc;
        previewLink.href = item.dataset.link;
    });
});