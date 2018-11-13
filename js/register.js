// 呼出 注册弹框
$(".reg-go").click(function () {
    $(".shade").css('display','block');
    $('.popbox').animate({
        'width': '500px',
        'height': '412px',
        'opacity':1,
    },50)
});

// 关闭 注册弹框
$('.back-login').click(function () {
    $(".shade").css('display','none');
    $('.popbox').animate({
        'width': 0,
        'height': 0,
        'opacity':0,
    },50)
});
$('.shade').click(function (e) {
    if (e.target.className==='shade') {
        $(".shade").css('display','none');
        $('.popbox').animate({
            'width': 0,
            'height': 0,
            'opacity':0,
        },50)
    }
});
//
$('.reg-user').bind('input propertychange',function () {
    let num=$('.reg-user').val();
    let reg=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    let str='';
    str=`${num}`;
    if (reg.test(str)==true) {
        $('.get-yzm').css({'background':'#d5d5d5','color':'rgba(0,0,0,.8)'})
    }
});


$('.shade2').click(function (e) {
    if (e.target.className=='shade shade2') {
        $(".shade2").css('display','none');
        $('.popbox2').animate({
            'width': 0,
            'height': 0,
            'opacity':0,
        },50)
    }
});

