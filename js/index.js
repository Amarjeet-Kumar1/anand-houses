window.onload=function(){
    console.log("this is index.js for just verify ");
    var btnc = document.getElementsByClassName('btn2');
    btnc[0].addEventListener('click', function(){
        console.log("clicked");
        document.location.href = '/contact.html';
    });
}

console.log("this is index.js for just verify ");
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
