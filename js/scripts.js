$(function() {
  $('a.thumbnail').click(function(event) {
    $(this).modal({
      fadeDuration: 1000,
      fadeDelay: 0.25
    });
    return false;
  });
});

console.log('Hi! Hello! 👋');
