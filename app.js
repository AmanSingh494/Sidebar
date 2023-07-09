// selecting items
const toggleButton = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".close-btn");

toggleButton.addEventListener("click",function(){
    sideBar.classList.toggle("show-sidebar");
})
closeButton.addEventListener("click",function(){
    sideBar.classList.remove("show-sidebar");
})