var tablinks=document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

const images = ["webdev.jpg", "python.png", "uiux.png"];
const header = ["webdev","python","uiux"]
let currentIndex = 0;
const image = document.getElementById("myImg");
const text =document.getElementById("id01");

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  image.src = images[currentIndex];
  document.getElementById("id01").innerText = header[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
  document.getElementById("id01").innerText = header[currentIndex];

}