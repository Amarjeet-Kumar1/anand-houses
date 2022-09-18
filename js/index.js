// typewritter effect
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};
window.onload=function(){
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

//announcement section
if(window.location.pathname == "/index.html"){
var annIcon = document.querySelector(".ann-icon i");
setInterval(function(){
    annIcon.classList.add("ani-icon");
    setTimeout(function(){
        annIcon.classList.remove("ani-icon");
    },250);
}, 500);

// typewriter effect


  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
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
