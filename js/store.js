$(window).on('load', function() {
    $('body').animate({
        opacity: 1
    })});


$('.btn-pop-up').on('click', function() {
    $('.pop-up-container').addClass('show');
});

$('.reset-tracking').on('click', function(event) {
    event.stopPropagation(); // Ngăn chặn sự kiện click truyền lên đến .pop-up-container
    $('.pop-up-container').removeClass('show');
});

$('.closei').on('click', function(event) {
    event.stopPropagation(); // Ngăn chặn sự kiện click truyền lên đến .pop-up-container
    $('.pop-up-container').removeClass('show');
});

$(function() {
    const sideMenu = $('.slide-menu-container');
    const menuBtn = $('#menu-btn');
    const closeBtn = $('#close-btn');

  
    menuBtn.on('click', function() {
      sideMenu.css('display', 'block');
    });
  
    closeBtn.on('click', function() {
      sideMenu.css('display', 'none');
    });

});



