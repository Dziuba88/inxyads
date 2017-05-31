  $(".navbar-toggle").click(function() {
    $(this).toggleClass('active')
    $('.navbar-collapse').toggleClass('open');
    $('html').toggleClass('overflow-hidden');
  });

  //.slideToggle('350')