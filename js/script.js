var slideImg = document.getElementById("slideImg");

var image = new Array(
    "image/picture1.jpg",
    "image/picture2.jpg",
    "image/picture3.jpg",
    "image/picture4.jpg"
);

var len = image.length;
var i=0;
function slider(){
    if(i > len-1){
        i=0;
    }
    slideImg.src = image[i];
    i++;
    setTimeout ('slider()', 3000);
}