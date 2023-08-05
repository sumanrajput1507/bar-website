$(document).ready(function () {
  $("#hamburger").click(function () {
    $(".navopen").addClass("open");
  });
  $("#close").click(function () {
    $(".navopen").removeClass("open");
  });
});

const inputs = document.querySelectorAll("input");
const comment = document.querySelector(".form-comment");
const submit = document.querySelector(".form-submit");

function init() {
  const isFill = [...inputs, comment].every(({ value }) => value.trim().length);
  submit.classList.toggle("enable", isFill);
}

document.addEventListener("keyup", init, false);

$(window).scroll(function () {
  if ($(this).scrollTop() >= 10) {
    $("#dynamic").addClass("nav-fixed");
  } else {
    $("#dynamic").removeClass("nav-fixed");
  }
});
$(window).scroll(function () {
  if ($(this).scrollTop() >= 10) {
    $("#details").addClass("fixed");
  } else {
    $("#details").removeClass("fixed");
  }
});


$(document).ready(function () {
  $(".top_link").click(function () {
    $(".top_link").removeClass("active");
    $(this).addClass("active");
  });
});


$(document).ready(function(){
  $(".tab_link").click(function(){
    $(".tab_link").removeClass("tabactive")
    $(".content_box").removeClass("tab_show");
    $(this).addClass("tabactive");
    let tabValue= $(this).attr("id");
     $(`.${tabValue}`).addClass("tab_show");
  });
});

