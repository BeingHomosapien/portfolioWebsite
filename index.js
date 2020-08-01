var Dots = document.getElementsByClassName("theme-dot");

for(var i=0; i<Dots.length; i++){
    Dots[i].addEventListener("click", function(){
        var mode = this.dataset.mode;
        console.log(mode);
        setTheme(mode);

    });
}

function setTheme(mode){
    document.getElementById("theme-changer").href = mode+".css";
}