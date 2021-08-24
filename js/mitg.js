//MITG website .js
// carousel--------------------------->start
$(document).ready(function () {
  if ($(".brands_slider").length) {
    var brandsSlider = $(".brands_slider");

    brandsSlider.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      nav: false,
      dots: false,
      autoWidth: true,
      items: 8,
      margin: 42,
    });

    if ($(".brands_prev").length) {
      var prev = $(".brands_prev");
      prev.on("click", function () {
        brandsSlider.trigger("prev.owl.carousel");
      });
    }

    if ($(".brands_next").length) {
      var next = $(".brands_next");
      next.on("click", function () {
        brandsSlider.trigger("next.owl.carousel");
      });
    }
  }
});

// menu--------------------------->start
// document.addEventListener("DOMContentLoaded", function () {
//   /////// Prevent closing from click inside dropdown
//   document.querySelectorAll(".dropdown-menu").forEach(function (element) {
//     element.addEventListener("click", function (e) {
//       e.stopPropagation();
//     });
//   });
// });
// DOMContentLoaded  end

// Photo Gallery------------------>start
$(".gallery ul li a").click(function () {
  var itemID = $(this).attr("href");
  $(".gallery ul").addClass("item_open");
  $(itemID).addClass("item_open");
  return false;
});
$(".close").click(function () {
  $(".port, .gallery ul").removeClass("item_open");
  return false;
});

$(".gallery ul li a").click(function () {
  $("html, body").animate(
    {
      scrollTop: parseInt($("#top").offset().top),
    },
    400
  );
});
