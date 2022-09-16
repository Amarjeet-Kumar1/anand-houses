window.onload=function(){
    // make a perfect
    var btnc = document.getElementById('btn-c');
    btnc.addEventListener('click', function(){
        console.log("clicked");
        document.location.href = '/contact.html';
    });
   // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var callBackBtn = document.getElementById("call-back");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
callBackBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//announcement section
var annIcon = document.querySelector(".ann-icon i");
setInterval(function(){
    annIcon.classList.add("ani-icon");
    setTimeout(function(){
        annIcon.classList.remove("ani-icon");
    },250);
}, 500);
}

// var btns = document.getElementById('btn-s');
// btns.addEventListener('click', function(){
//     console.log("clicked");
//     document.location.href = '/contact.html';
// });






// btn = document.getElementById('btn')
// btn.addEventListener('click',func1);




// function func1(e){
//     console.log("thanks",e);
// }

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
