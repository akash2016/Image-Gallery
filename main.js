var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

 var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
var sr=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"];

/* Looping through images */
for(i=0;i<sr.length;i++){
  
  var newImage = document.createElement('img');
  newImage.setAttribute('src', sr[i]);
  thumbBar.appendChild(newImage);
  thumbBar.lastChild.addEventListener('click',changeImg);
}
function changeImg(e){
    e.stopPropagation();
    displayedImage.src=e.target.getAttribute("src");
    
}
btn.onclick=function(){
    if (btn.getAttribute("class")==="dark"){
        btn.setAttribute("class","light");
        overlay.style.backgroundColor="rgba(0,0,0,0.5)";
        btn.textContent="Lighten";
        
    }
    else{
          btn.setAttribute("class","dark");
        overlay.style.backgroundColor="rgba(0,0,0,0)";
        btn.textContent="Darken";
    }
    
}

/* Wiring up the Darken/Lighten button */

