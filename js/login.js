$(".username").blur(function () {
    let username=$(this).val();
    let reg1=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    let str="";
    str=`${username}`;
    if (username==''){
        $('.i-no1').css('display','block');
        $('.tip1').text('用户名不能为空').css('display','block');
    }else if (reg1.test(str)==true) {
        $('.i-no1').css('display','none');
        $('.i-ok1').css('display','block');
        $('.tip1').text('').css('display','none');
    }else {
        $('.i-no1').css('display','block');
        $('.tip1').text('请输入正确的手机号').css('display','block');
    }
});

$(".password").blur(function () {
    let password=$(this).val();
    let reg2=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    let str='';
    str=`${password}`;
    if (password==''){
        $('.i-no2').css('display','block');
        $('.tip2').text('密码不能为空').css('display','block');
    }else if (reg2.test(str)==true) {
        $('.i-no2').css('display','none');
        $('.i-ok2').css('display','block');
        $('.tip2').text('').css('display','none');
    }else {
        $('.i-no2').css('display','block');
        $('.tip2').text('密码错误').css('display','block');
    }
});





