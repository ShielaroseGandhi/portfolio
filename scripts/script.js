// typed js
let typed = new Typed(".typed", {
   strings: ["I'm a front-end web developer"],
   stringsElement: null,
   startDelay: 2000,
   typeSpeed: 50,
   backSpeed: 50,
   smartBackspace: true,
   backDelay: 1200,
   loop: false,
   loopCount: Infinity,
   showCursor: false,
   cursorChar: '|',
   autoInsertCss: true,
})

// Doc Ready
$(function(){
   // uncheck checkbox when link in nav is clicked
   $(".main-nav__menu--link").on("click", function(){
      $("input[type=checkbox]").prop("checked", false)
   })

   // smooth scroll
   $('a').smoothScroll();
   
   // animate on scroll
   AOS.init({
      // once: true,
   });
   
   // play video on hover 
   $('video').hover(function(){
      $(this)[0].play()
   });

   // once video has ended, add portrait img on top again
   $('video').on('ended', function(){
      $(this)[0].load()
   });

   //remove hover on touchscreen devices
   window.addEventListener('touchstart', function(){
      $(".main-nav__menu--link").removeClass("hover");
      $(".skills__card").removeClass("hover");
   });

   // stop horizontal scroll - for safari
   let offset = window.pageXOffset;
   $(window).scroll(function() {
      if (offset != window.pageXOffset)
         window.scrollTo(0, window.pageYOffset);
   });

});