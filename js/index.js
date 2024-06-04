
window.onload=function(){
   
const sdk = new CustomerSupportSDK('Bjxqd2Vq3csghkWB90bUO');
   // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var callBackBtn = document.getElementById("call-back");
var NavCallBack = document.getElementById("nav-call");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
if(callBackBtn){
  callBackBtn.onclick = function() {
    modal.style.display = "block";
  }
}

 
  NavCallBack.onclick = function() {
    modal.style.display = "block";
  }



// When the user clicks on <span> (x), close the modal

  span[0].onclick = function() {
    modal.style.display = "none";
  }
 

  



// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


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
