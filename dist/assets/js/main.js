window.addEventListener("load", function() {
  const tabLinks = Array.from(document.querySelectorAll(".tabs-list a"));
  const tabs = Array.from(document.querySelectorAll(".tab"));

  tabLinks.map(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      clearClasses(tabLinks);
      e.target.classList.add("active");
      const clickedTab = e.target.getAttribute("href");
      clearClasses(tabs);
      document.querySelector(clickedTab).classList.add("active");
    });
  });

  const clearClasses = arr => {
    arr.map(el => {
      el.classList.remove("active");
    });
  };

  const firstStepInputs = document.querySelectorAll("form .step.first input");
  const steps = Array.from(document.querySelectorAll("form .step"));
  const serviceInput = document.querySelector("input.service");
  const dateInput = document.querySelector("input.date");
  const firstInput = document.querySelector(".row:first-child input");
  const rightBtn = document.querySelector(".next-btn");
  firstInput.focus();

  for (var i = 0; i < firstStepInputs.length; i++) {
    firstStepInputs[i].addEventListener("input", e => {
      if (!!serviceInput.value.length && !!dateInput.value.length) {
        rightBtn.classList.add("active");
      } else {
        rightBtn.classList.remove("active");
      }
    });
  }

  for (var i = 0; i < firstStepInputs.length; i++) {
    firstStepInputs[i].addEventListener("keypress", e => {
      if (e.keyCode == 13) {
        e.preventDefault();
      }
    });
  }

  rightBtn.addEventListener("click", () => {
    clearClasses(steps);
    document.querySelector(".step.with-submit").classList.add("active");
  });

  var elements = document.getElementsByClassName("form");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener(
      "submit",
      function(evt) {
        var http = new XMLHttpRequest(),
          f = this;
        SendData = new FormData(f);

        console.log(SendData);
        evt.preventDefault();

        http.open("POST", "form.php", true);
        http.onreadystatechange = function() {
          if (http.readyState == 4 && http.status == 200) {
            clearClasses(steps);
            document.querySelector(".step.finish").classList.add("active");
          }
        };
        http.onerror = function() {
          // error
        };
        http.send(SendData);
      },
      false
    );
  }
});
