burger = document.querySelector('.burger');


burger.addEventListener('click',()=>{
    
    document.getElementById("myNav").style.width = "100%";
    
});


  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }