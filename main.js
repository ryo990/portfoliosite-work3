const pics_src = ["image/sneaker.jpg","image/sneaker2.jpg"];
let num = -1;

function slideshow_timer(){
  if (num === 1){
  num = 0;
  } 
  else {
  num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}

setInterval(slideshow_timer, 3000);