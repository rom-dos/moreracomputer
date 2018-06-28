$(document).ready(function() {
  // Smoothing Scrolling
  $("a[href^='#']").click(function(e) {
    e.preventDefault();

    let position = $($(this).attr("href")).offset().top - 80;

    $("body, html").animate({
      scrollTop: position
    }, 1000);
  });

  // Ascii Color Rotate
  setInterval(function() {
    $('pre').animate( { color: '#284253' }, 100)
    .animate( { color: '#062437' }, 100)
    .animate( { color: '#F9F9FA' }, 100)
    .animate( { color: '#EBEEEF' }, 100)
    .animate( { color: '#DDE1E4' }, 100)
    .animate( { color: '#CED4D8' }, 100)
    .animate( { color: '#BDC5CA' }, 100)
    .animate( { color: '#AAB4BB' }, 100)
    .animate( { color: '#95A2AA' }, 100)
    .animate( { color: '#7C8B95' }, 100)
    .animate( { color: '#5B6F7B' }, 100)
    .animate( { color: '#7C8B95' }, 100)
    .animate( { color: '#95A2AA' }, 100)
    .animate( { color: '#AAB4BB' }, 100)
    .animate( { color: '#BDC5CA' }, 100)
    .animate( { color: '#CED4D8' }, 100)
    .animate( { color: '#DDE1E4' }, 100)
    .animate( { color: '#EBEEEF' }, 100)
    .animate( { color: '#F9F9FA' }, 100)
    .animate( { color: '#062437' }, 100);
  }, 100);
});
