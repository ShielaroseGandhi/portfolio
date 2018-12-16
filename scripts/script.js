// Doc Ready
let typed = new Typed(".typed", {
   strings: [`I'm a front-end web developer.`],
   stringsElement: null,
   startDelay: 1000,
   typeSpeed: 50,
   backSpeed: 50,
   smartBackspace: true,
   backDelay: 1200,
   loop: false,
   loopCount: Infinity,
   showCursor: false,
   cursorChar: '|',
   autoInsertCss: true,
});

$(function(){
   // uncheck checkbox when link in nav is clicked
   $(".main-nav__menu--link").on("click", function(){
      $("input[type=checkbox]").prop("checked", false)
   })


});