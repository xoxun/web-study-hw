// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const h2 = document.querySelector("h2");

const superEventHandler = {
  handleTextClick: function () {
    h2.innerText = "That was a right click!";
    h2.style.color = colors[4];
  },
  handleMouseover: function () {
    h2.innerText = "mouse is here!";
    h2.style.color = colors[0];
  },
  handleMouserout: function(){
    h2.innerText = "mouse is gone!";
    h2.style.color = colors[1];
  },
  hadleResize: function(){
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  }
};

window.addEventListener("contextmenu", superEventHandler.handleTextClick);
h2.addEventListener("mouseover", superEventHandler.handleMouseover);
h2.addEventListener("mouseout", superEventHandler.handleMouserout);
window.addEventListener("resize",superEventHandler.hadleResize);