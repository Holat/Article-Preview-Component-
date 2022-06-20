const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const label = document.querySelector(".label");
const bottomHeader = document.querySelector(".bottom-header");


openBtn.addEventListener('click', function(){
    label.classList.toggle('active')
    bottomHeader.classList.toggle('mobile')
})
closeBtn.addEventListener('click',function(){
    label.classList.remove('active');
    bottomHeader.classList.remove('mobile')
})