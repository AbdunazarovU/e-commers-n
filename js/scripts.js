let button = document.querySelector(".open");
let header = document.querySelector(".site-header");

button.onclick=function(){
    button.classList.toggle("close");
    header.classList.toggle("site-header-open");
}
{
let listButton=document.querySelector(".header-select__button-list")
let gridButton=document.querySelector(".header-select__button-grid")
let listSection=document.getElementById("product-list")
let gridSection=document.getElementById("product-grid")

listButton.onclick=function(){
    gridSection.classList.remove("hidden")
    listSection.classList.add("hidden")
}
gridButton.onclick=function(){
    listSection.classList.remove("hidden")
    gridSection.classList.add("hidden")
}
}