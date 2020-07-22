$("a").click (function() {
  $(".header-left , .header-right").hide();
  $(".hamburger-menu").show();
});

$(".close").click (function() {
  $(".header-left , .header-right").show();
  $(".hamburger-menu").hide();
});
