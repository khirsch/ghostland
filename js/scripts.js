$(function() {
  $('a').click(function(event) {
    $(this).modal({
      fadeDuration: 1000,
      fadeDelay: 0.50
    });
    return false;
  });
});
