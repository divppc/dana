window.onload = () => {
  const btn = document.querySelector(".btn a");
  const target = document.querySelector("section.cards").offsetTop;

  btn.addEventListener("click", e => {
    e.preventDefault();

    window.scroll({
      top: target + 50,
      behavior: "smooth"
    });
  });
};
