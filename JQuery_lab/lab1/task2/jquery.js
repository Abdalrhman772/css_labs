$(".container").css({
  display: "flex",
  width: "600px",
  height: "500px",
  margin: "100px auto",
});

$(".container>div").css({
  margin: "25px",
  "justify-content": "center",
  "align-items": "center",
});
$("img").css({ width: "250px" });
$("p").hide();

$("img").on("click", function () {
  $(this).siblings("p").slideToggle();
});
