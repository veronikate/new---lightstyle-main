var viewportWidth = $(window).width();

if (viewportWidth <= 768) {
  $(".red_button").html('<i class="fa-solid fa-chevron-right"></i>'),
    $(".red_button").css("width", "30px");
  $(".red_button").css("padding", "5px 5px");
}
