// ** Variables **//
upBtn = $("#upBtn");
upBtnArrow = $("#upBtnLineTwo");

// ** Functions ** //
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

// ** Use ** //

document.getElementById("about").addEventListener("click", () => {
  scrollToElement(document.getElementById("aboutSection"));
});
document.getElementById("work").addEventListener("click", () => {
  console.log("YE");
  scrollToElement(document.getElementById("workSection"));
});
document.getElementById("portfolio").addEventListener("click", () => {
  scrollToElement(document.getElementById("workSection"));
});
document.getElementById("aboutme").addEventListener("click", () => {
  scrollToElement(document.getElementById("aboutSection"));
});
document.getElementById("mywork").addEventListener("click", () => {
  scrollToElement(document.getElementById("workSection"));
});
document.getElementById("home").addEventListener("click", () => {
  topFunction();
});

upBtn.mouseleave(function () {
  upBtnArrow.bind("animationiteration webkitAnimationIteration", function () {
    upBtnArrow.removeClass("floatArrow");
    upBtnArrow.unbind("animationiteration webkitAnimationIteration");
  });
});

upBtn.mouseenter(function () {
  upBtnArrow.addClass("floatArrow");
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
