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

   // form validation
   formValidation = () => {
      $(".contact__input").on("keydown", function(e){
         if ($("#name").is(":focus")) {
            $(".error").remove()
            $("#name").removeClass("contact__input--error")
         } else if ($("#message").is(":focus")) {
            $(".error").remove()
            $("#message").removeClass("contact__input--error")
         } else if ($("#email").is(":focus")) {
            $(".error").remove()
            $("#email").removeClass("contact__input--error")
         }
      })

      $(".contact__form").submit(e => {
         let name = $("#name").val();
         let email = $("#email").val();
         let message = $("#message").val();

         let regexName = /^[a-z ,.'-]+$/i
         let validName = regexName.test(name)

         let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         let validEmail = regexEmail.test(email);

         $(".error").remove()
         if (name.length < 1) {
            e.preventDefault();
            $("#name").after(`<span class="error">Please enter your name</span>`)
            $("#name").addClass("contact__input--error")
         } else if (!validName){
            e.preventDefault();
            $("#name").after(`<span class="error">Sorry, numbers and special characters are invalid</span>`)
            $("#name").addClass("contact__input--error")
         }
         if (message.length < 10) {
            e.preventDefault();
            $("#message").after(`<span class="error">Your message needs to be at least 10 characters long.</span>`)
            $("#message").addClass("contact__input--error")
         }
         if (email.length < 1) {
            e.preventDefault();
            $("#email").after(`<span class="error">This field is required</span>`)
            $("#email").addClass("contact__input--error")
         } else if (!validEmail) {
            e.preventDefault();
            $("#email").after(`<span class="error">Enter a valid email</span>`);
            $("#email").addClass("contact__input--error")
         }
      })
   }

   formValidation()
});