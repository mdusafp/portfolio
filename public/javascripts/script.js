(function ($, window, document) {

  $(function () {
    let buttonCollapse = $('.button-collapse');
    let carousel = $('.owl-carousel');

    let home = $('#home');
    let about = $('#about');
    let projects = $('#my-projects');
    let contacts = $('#contacts');


    home.find('h1').addClass('animated bounceInDown');
    home.find('h2').addClass('animated bounceInDown');

    about.addClass('animated bounceInRight');

    projects.addClass('animated bounceInLeft');

    contacts.addClass('animated fadeIn');


    carousel.owlCarousel({
      nav: true,
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      fullWidth: true
    }).trigger('play.owl.autoplay', [3000]);
    buttonCollapse.sideNav();
  });

}(window.jQuery, window, document));
