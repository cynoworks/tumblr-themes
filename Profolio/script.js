let header = $('.header').outerHeight(),
    container = $('.posts');
// hide preloader
$(window).on('load',function(){
    setTimeout(removeLoader, 500);
});
function removeLoader(){
    $('.preloader').fadeOut(500, function(){
        $('.preloader').hide();
        $('.page-wrapper').css('display', 'block');
    });
}
// scroll to top
function toTop() {
    $(window).scrollTop(0);
}
// toggle mobile menu
function toggleMenu(){
    $('html').toggleClass('no-scroll');
    $('.header-wrapper').toggleClass('toggle');
}
$(".nav-btn, .nav-item, .social-item").on('click', function(){
    toggleMenu();
    $('.nav').scrollTop(0);
});
$(".nav-item").each(function(index){
    let s = 0.1;
    $(this).css({
         'animation-delay' : s*(1+index) + 's'
    });
});
$(".post-inner").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );
