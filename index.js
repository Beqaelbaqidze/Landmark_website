const topnav = document.getElementById('top-nav');
const menu = document.getElementById("menu");
const clos = document.getElementById("close");

function navbar(){
    if(topnav.style.visibility == "hidden"){
        topnav.style.visibility = "visible";
        menu.style.display = "none";
        clos.style.display = "block";
    } else{
        topnav.style.visibility = "hidden";
        menu.style.display = "block";
        clos.style.display = "none";
    }
}
