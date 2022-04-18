const $btns = $("#navi li");
const $boxs = $(".myScroll");
const len = $btns.length;
const posArr = [];
const speed = 1000;

setPos();

$btns.children("a").on("click", function (e) {
    e.preventDefault();
    moveScroll(this);
});

$(window).on("scroll", function () {
    var scroll = $(this).scrollTop();

    activateBtn(scroll);
});

function setPos() {
    for (var i = 0; i < len; i++) {
        posArr.push($boxs.eq(i).offset().top);
    }
}

function activateBtn(scroll) {
    for (var i = 0; i < len; i++) {
        if (scroll >= posArr[i]) {
            $btns.children("a").removeClass("on");
            $btns.eq(i).children("a").addClass("on");
        }
    }
}

function moveScroll(el) {
    var target = $(el).attr("href");
    var targetPos = $(target).offset().top;

    $("html, body").animate({
        scrollTop: targetPos
    }, speed);
}