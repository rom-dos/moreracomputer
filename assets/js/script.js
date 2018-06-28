$(document).ready(function() {
  $("a[href^='#']").click(function(e) {
    e.preventDefault();

    let position = $($(this).attr("href")).offset().top - 80;

    $("body, html").animate({
      scrollTop: position
    }, 1000);
  });
});
