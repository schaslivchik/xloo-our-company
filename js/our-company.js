


$('.tiltBox').hover(
  function () { $(this).addClass('tiltZindex') },
  function () { $(this).removeClass('tiltZindex') }
)


$('.main-menu-trigger').click(function () {
  event.preventDefault();
  $('body').toggleClass('scroll-hidden')
  $(this).toggleClass('active-trigger');
  $('.nav-xloo').toggleClass('active-menu');
})

$('.btn-send-message').click(function () {
  event.preventDefault();
  $('body').addClass('scroll-hidden')
  $('.xloo-modal').addClass('modal-open');
});

$('.xloo-close-modal').click(function () {
  event.preventDefault();
  $('body').removeClass('scroll-hidden')
  $('.xloo-modal').removeClass('modal-open');
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    $('body').removeClass('scroll-hidden')
    $('.xloo-modal').removeClass('modal-open');
  }
});

var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);

function autosize() {
  var el = this;
  setTimeout(function () {
    el.style.cssText = 'height:auto; padding:10px';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
}

$(document).ready(function () {

  $(".file-upload input[type=file]").change(function () {
    var filename = $(this).val().replace(/.*\\/, "");
    $("#filename").val(filename);
  });

})


$('.counter').counterUp({
  delay: 10,
  time: 1000,
  offset: 100,
  beginAt: 0,
  formatter: function (n) {
    return n.replace(/,/g, '.');
  }
});

// $(window).scroll(function () {
//   if ($(this).scrollTop() > $('.section-map').offset().top - 100) {
//     $('.section-map').addClass('animation_map');
//   }
// });






