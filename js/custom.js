const $btns = $("#navi li");
const $boxs = $(".myScroll");
const len = $btns.length;
const posArr = [];
const speed = 1000;

setPos();

//내비 버튼을 클릭했을 때
$btns.children("a").on("click", function (e) {
    //기본링크이동금지
    e.preventDefault();
    moveScroll(this);
});

//화면에서 스크롤할 때
$(window).on("scroll", function () {
    //현재 스크롤한 값을 변수 scroll에 담는다
    var scroll = $(this).scrollTop();

    activateBtn(scroll);
});

//myScroll클래스가 있는 박스들을, 박스 갯수만큼 반복을 돌면서 전역변수 posArr에 세로위치값을 저장하는 함수
function setPos() {
    for (var i = 0; i < len; i++) {
        posArr.push($boxs.eq(i).offset().top);
    }
}

//버튼을 반복을 돌면서 posArr에 순번에 맞춰서 on을 추가하는 함수
function activateBtn(scroll) {
    for (var i = 0; i < len; i++) {
        //스크롤이 posArr의 순번에 해당하는 값보다 크거나 같다면
        if (scroll >= posArr[i]) {
            //모든 버튼에 on을 제거하고
            $btns.children("a").removeClass("on");
            //해당하는 버튼의 a에 on을 추가
            $btns.eq(i).children("a").addClass("on");
        }
    }
}

function moveScroll(el) {
    //클릭한 버튼에서 href값을 구해서 변수 target에 담고
    //= navi li a의 href값을 target에 담아서
    var target = $(el).attr("href");

    //클릭한 버튼에 해당하는 target의 세로위치값을 변수 targetPos에 담는다.
    var targetPos = $(target).offset().top;

    //문서의 스크롤바 위치값이 targetPos에 맞춰 animate로 이동하도록 처리
    //= 문서의 스크롤바위치를 targetPos위치로 이동
    $("html, body").animate({
        scrollTop: targetPos
    }, speed);
}