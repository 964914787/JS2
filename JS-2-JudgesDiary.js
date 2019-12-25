//json
var Nunshuzi=JSON.parse(sessionStorage.getItem('kee'));//人数
var Nunshuza=JSON.parse(sessionStorage.getItem('kea'));//水民
var Nunshuzb=JSON.parse(sessionStorage.getItem('keb'));//幽灵
var Phrase = JSON.parse(sessionStorage.getItem("kec"));//数组

//创建水民幽灵数组
var arrayone = [];
for (var e=0; e < Phrase.length;e++) {
    if (Phrase[e] == Nunshuza) {
        arrayone[e] = "平民"
    }
    if (Phrase[e] == Nunshuzb) {
        arrayone[e] = "幽灵"
    }
}
console.log(arrayone);

//显示同等人数的BOX
$('.cards-a').eq(0).html(arrayone[0])
$('.cards-b').eq(0).html("1号")
$(document).ready(function(){
    for (var i = 1; i < Nunshuzi; i++) {
        $("#aaa").append(`<div class="cards-box flex-box flex-center">` +
            ` <div class="cards">` +
            `<div class="cards-a flex-box flex-center">` + arrayone[i] + `</div>`+
            `<div class="cards-b flex-box flex-center">` +(i+1)+ `号</div>`+
            ` </div> ` +
            ` </div>`
        );
    }
}
)

//开始游戏
$(".footer-btn").eq(0).click(function(){
    window.location.href = "JS-2-Taiwaneseversion.html"
    sessionStorage.setItem('begin','start');
})

//返回按钮事件
$('.bg-Back___Icon').eq(0).on('click',function() {
    var r = confirm("确认重新设置游戏？");
    if (r == true) {
        x = window.location = "JS-2-配比页面.html" ;
    } else {
        x = "！";
    }
})
//退出按钮事件
$('.bg-Close').eq(0).on('click',function() {
    var r = confirm("确认退出游戏？");
    if (r == true) {
        x = window.location = "css-7-1.html" ;
    } else {
        x = "！";
    }
})
