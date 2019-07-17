$(document).ready(function(){
// CONTROL MOBILE Menu
$('.mobile-menu').on('click', function() {
  $('.Navbar-link-container').slideToggle();
});

$(window).on('resize', function() {
  var screenWidth = $(window).width();
  if (screenWidth > 600) {
    $('.Navbar-link-container').css('display', 'inherit');
  } else {
    $('.Navbar-link-container').css('display', 'none');
  }
});
//FOR SEARCH BOX
// $(function() {
//     var alreadyFilled = false;
//     var states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
//
//     function initDialog() {
//         clearDialog();
//         for (var i = 0; i < states.length; i++) {
//             $('.dialog').append('<div>' + states[i] + '</div>');
//         }
//     }
//     function clearDialog() {
//         $('.dialog').empty();
//     }
//     $('.search-btn').click(function() {
//         if (!alreadyFilled) {
//             $('.dialog').addClass('open');
//         }
//
//     });
//     $('body').on('click', '.dialog > div', function() {
//         $('.search-btn').val($(this).text()).focus();
//         $('.fa-search').addClass('visible');
//         alreadyFilled = true;
//     });
//     $('fa-search').click(function() {
//         alreadyFilled = false;
//         $('.dialog').addClass('open');
//         $('.search-btn').val('').focus();
//         $(this).removeClass('visible');
//     });
//
//     function match(str) {
//         str = str.toLowerCase();
//         clearDialog();
//         for (var i = 0; i < states.length; i++) {
//             if (states[i].toLowerCase().startsWith(str)) {
//                 $('.dialog').append('<div>' + states[i] + '</div>');
//             }
//         }
//     }
//     $('.autocomplete input').on('input', function() {
//         $('.dialog').addClass('open');
//         alreadyFilled = false;
//         match($(this).val());
//     });
//     $('body').click(function(e) {
//         if (!$(e.target).is("input, .close")) {
//             $('.dialog').removeClass('open');
//         }
//     });
//     initDialog();
// });
/*
//////USE OF SLICK CAROUSEL FOR GALLERY
*/
// $(document).ready(function() {

  $('.Gallery-container').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
  });

});
