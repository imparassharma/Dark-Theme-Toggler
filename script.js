const btn = document.querySelector(".btn");
const header = document.getElementById("header");

btn.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    if(document.body.classList=="dark"){
        btn.innerHTML="<i class=\"far fa-lightbulb\"></i>";
        header.style.backgroundColor = "#424874";
    }
    else{
        btn.innerHTML="<i class=\"fas fa-lightbulb\"></i>";
        header.style.backgroundColor = "#A6B1E1";
    }
})