let click = 0;


//Change to toro clicker
document.getElementById("change_toro").onclick = function(){
    document.getElementById("title").textContent = "Toro Clicker";
    document.getElementById("image").src = "IMGs/toro.jpg";
}

//Change to kuro clicker
document.getElementById("change_kuro").onclick = function(){
    document.getElementById("title").textContent = "Kuro Clicker";
    document.getElementById("image").src = "IMGs/kuro.jpg";
}

document.getElementById("image").onclick = function(){
    click = click + 1;
    document.getElementById("counter").textContent = `${click}`
}