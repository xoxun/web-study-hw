const body = document.querySelector("body");
body.style.backgroundColor = "#B24CCB"
body.style.color = "white";

window.addEventListener("resize", handleResize);

function handleResize(){

    const windowWidth = window.outerWidth;
  
    console.log(windowWidth);
    if(windowWidth >= 1200){
        body.style.backgroundColor = "#FBC871";
    }else if(windowWidth<1200 && windowWidth >600){
        body.style.backgroundColor = "#B24CCB";
    }else{
        body.style.backgroundColor = "#4867EE";
    }
        
}