const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const body = document.querySelector("body");

const colorChangeBtn = document.querySelector("body button");

function handleBtnClick(){
    const colorL = Math.floor(Math.random()*colors.length);
    let colorR = colorL;
    while(colorL === colorR){
        colorR = Math.floor(Math.random()*colors.length);
    }
    console.log(colorL,colorR);

    body.style.backgroundImage = `linear-gradient(to right, ${colors[colorL]}, ${colors[colorR]})`;
}

colorChangeBtn.addEventListener("click",handleBtnClick);
  