var navbar_width = $('.navbar-nav').css('width')
var navbar_width_int = parseFloat(navbar_width)
var viewportWidth = $(window).width();
var count = (viewportWidth - navbar_width_int) / 2
console.log(viewportWidth)
console.log(navbar_width)
console.log(count)
$('.navbar-nav').css('left', count + "px")
