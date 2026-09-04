(function () {
  "use strict";

  var form = document.querySelector("[data-diagnostic]");
  if (!form) return;

  var result = form.querySelector("[data-result]");
  var scoreValue = form.querySelector("[data-score-value]");
  var routeValue = form.querySelector("[data-route]");
  var messageValue = form.querySelector("[data-message]");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var scores = Array.prototype.slice.call(
      form.querySelectorAll("select[data-score]")
    ).map(function (select) {
      return Number(select.value);
    });

    var total = scores.reduce(function (sum, score) {
      return sum + score;
    }, 0);

    var route;
    var message;
    if (total < 8) {
      route = "Foundation";
      message = "Repair the highest-impact prerequisites before adding speed. Start with the first two weeks and repeat the diagnostic after each repair block.";
    } else if (total < 12) {
      route = "Core";
      message = "Follow the standard sequence. Spend extra practice time on any domain rated 0, then use the capstone to connect the concepts.";
    } else {
      route = "Accelerated";
      message = "Compress familiar explanations, but do not skip evidence. Prioritize scenario reasoning, integration trade-offs, and timed mixed-domain sets.";
    }

    scoreValue.textContent = total + "/14";
    routeValue.textContent = route + " route";
    messageValue.textContent = message;
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
})();
