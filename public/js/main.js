jQuery(document).ready(function ($) {
  $(document).on("click", function (event) {
    const $div = $("#outside-click");
    const $navbarText = $("#navbarText");
    if (!$div.is(event.target) && $div.has(event.target).length === 0) {
      $navbarText.removeClass("show");
    }
  });

  // menu bg add
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      $("header").addClass("menu-bg-fixed");
    } else {
      $("header").removeClass("menu-bg-fixed");
    }
  });

  $(".dropdown-toggle").click(function () {
    $(this).next(".dropdown").toggle(400);
  });

  $(document).click(function (e) {
    var target = e.target;
    if (!$(target).is(".dropdown-toggle") && !$(target).parents().is(".dropdown-toggle")) {
      $(".dropdown").hide();
    }
  });
});
