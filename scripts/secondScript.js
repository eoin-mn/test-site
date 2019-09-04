let myImage = document.querySelector('img');

myImage.onclick = function()  {
let mySrc = myImage.getAttribute('src');
if(mySrc === 'images/android-chrome-512x512.png') {
    myImage.setAttribute ('src','images/android-chrome-coloured-512x512.png');
}  else  {myImage.setAttribute ('src','images/android-chrome-512x512.png');

}
}
