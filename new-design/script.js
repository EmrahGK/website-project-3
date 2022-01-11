let marquee = document.getElementById("header");


function resize(){
    let innerWidth = window.innerWidth;

    if(1200 < innerWidth){
        marquee.setAttribute("scrollamount", "10");
    }

    else if(900 <= innerWidth <= 1200){
        marquee.setAttribute("scrollamount", "5");
    }

    else if(900 > innerWidth){
        marquee.setAttribute("scrollamount", "1");
    }
}

resize();
window.onresize = resize;