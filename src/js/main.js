$(".btn a").on("click", () => {
  $("html, body").animate(
    {
      scrollTop: $("section.cards").offset().top + 30
    },
    500,
    "linear"
  );
});
