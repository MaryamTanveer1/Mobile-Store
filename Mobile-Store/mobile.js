const navslide = () =>{
    const hamburger= document.querySelector('#hamburger');
    const navbar= document.querySelector('.nav-links');
    const navlinks= document.querySelectorAll('.nav-links li');
    hamburger.addEventListener('click', ()=>{
        navbar.classList.toggle('nav-active');
    });
    // navlinks.forEach((link,Home) => {
    //        link.style.animation = `newlinkfade 0.5s ease forwards ${Home/7 + 0.5}s`
    // })

}
navslide();

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
