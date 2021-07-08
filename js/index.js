//Get the button:
upBtn = $("#upBtn");

function scrollToElement(pageElement) {
  var positionX = 0,
    positionY = 0;

  while (pageElement != null) {
    positionX += pageElement.offsetLeft;
    positionY += pageElement.offsetTop;
    pageElement = pageElement.offsetParent;
    window.scrollTo(positionX, positionY);
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upBtn.addClass("btn_active");
  } else {
    upBtn.removeClass("btn_active");
  }
}

function topFunction() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

document.getElementById("about").addEventListener("click", () => {
  scrollToElement(document.getElementById("aboutSection"));
});
document.getElementById("work").addEventListener("click", () => {
  scrollToElement(document.getElementById("workSection"));
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
