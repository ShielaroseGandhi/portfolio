// Doc Ready
$(function(){
   // uncheck checkbox when link in nav is clicked
   $(".main-nav__menu--link").on("click", function(){
      $("input[type=checkbox]").prop("checked", false)
   })
   
   // typed js
   let typed = new Typed(".typed", {
      strings: ["I'm a front-end web developer"],
      stringsElement: null,
      startDelay: 1500,
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      backDelay: 1200,
      loop: false,
      loopCount: Infinity,
      showCursor: false,
      cursorChar: '|',
      autoInsertCss: true,
      callback: function() {}
   });

   // play video on hover of the image 
   $(".portfolio__screenshot").hover(function(){
      $(this).addClass("hidden"),
      $("video").removeClass("hidden")
   })

   // once video has ended, add portrait img on top again
   $('video').on('ended', function () {
      $(this).addClass("hidden"),
      $(".portfolio__screenshot").removeClass("hidden")
   });

});