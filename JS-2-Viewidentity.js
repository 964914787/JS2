//JSON
var Nunshuzi=JSON.parse(sessionStorage.getItem('kee'));//人数
var Nunshuza=JSON.parse(sessionStorage.getItem('kea'));//水民
var Nunshuzb=JSON.parse(sessionStorage.getItem('keb'));//幽灵
var phrasel = document.getElementsByClassName("Phrasel");
var d = parseInt(Nunshuzi)

//判断幽灵水民人数
var X,Y;
if (d >= 4 && d <= 5) {
    X = 1;
}
if (d >= 6 && d <= 8) {
    X = 2;
}
if (d >= 9 && d <= 11) {
    X = 3;
}
if (d >= 12 && d <= 15) {
    X = 4;
}
if (d >= 16 && d <= 18) {
    X = 5;
}
Y = d - X;
sessionStorage.setItem('xx', X )
sessionStorage.setItem('yy', Y )

//创建词汇
var Phrase = []
for (var i=0;i<Y;i++)  {
    Phrase.push(Nunshuza);
}
for (var o=0;o<X;o++)  {
    Phrase.push(Nunshuzb);
}

//洗牌算法，打乱顺序
var len = Phrase.length;
for(var i=0;i<len;i++) {
    var index = Math.floor(Math.random()*(len-i));
    var tem = Phrase[index];
    Phrase[index] = Phrase[len-i-1];
    Phrase[len-i-1] = tem;
}
console.log(Phrase);
VocabularyTransfee = Phrase
var sendonc=JSON.stringify(VocabularyTransfee);//转换为JSON字串符
sessionStorage.setItem("kec",sendonc)

//页尾按钮点击事件
var a=0,
    b=1,
    c=1,
    e=-0.5;
$(".footer-btn").eq(0).click(function(){
    a++;
    b=b+0.5;
    e=e+0.5;
    if (a % 2 == 0) {
        $('.bg-flop').eq(0).css('display','inherit')
        $('.identity').eq(0).css('display','none')
        $('.serial-number').eq(0).html(b)
        $('.footer-btn').eq(0).html("查看"+c+"号身份")
    }
    if (a % 2 == 1) {
        c++;
        $('.bg-flop').eq(0).css('display','none')
        $('.identity').eq(0).css('display','inherit')
        $('.footer-btn').eq(0).html("隐藏并传递给"+c+"号")
        phrasel[0].innerHTML = "词组："+ Phrase[e]
    }
    if (phrasel[0].innerHTML == "词组："+Nunshuza) {
        $('#role').eq(0).html("角色：水民")
    }
    if (phrasel[0].innerHTML == "词组："+Nunshuzb) {
        $('#role').eq(0).html("角色：幽灵")
    }
    //当等于人数时停止传递下一位
    if (b== d + 0.5) {
        b = d - 0.5
        c = d
        $('.footer-btn').eq(0).html("法官查看")
        $(".footer-btn").eq(0).click(function(){
           window.location.href = "Judge'sDiary.html"; 
        })
    }
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






